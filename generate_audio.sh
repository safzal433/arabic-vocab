#!/usr/bin/env bash
# Downloads two audio files per word in words.js:
#   audio/<id>.mp3     the Arabic word
#   audio/<id>_en.mp3  its English meaning
# Both use the Google Translate voice, so everything sounds consistent and
# — importantly — the app never has to hit the network at play time.
#
# Run this after adding new words to words.js. Safe to re-run any time —
# words that already have a file in audio/ are skipped, not re-fetched.
#
# Requires: bash + curl (Git Bash on Windows has both).
# Optional: ffmpeg on PATH, for a clean single pronunciation (see below).
#
# IMPORTANT #1: the Arabic text is written to a temp file and passed to
# curl via --data-urlencode q@file, NOT as a direct command-line argument.
# Git Bash is UTF-8 internally, but curl.exe here is a native Windows
# binary — Arabic text passed straight through argv gets silently mangled
# into a run of literal "?" characters at that handoff (Windows ANSI
# codepage conversion), so e.g. two different 8-letter words both turn
# into "????????" and Google dutifully returns identical audio for both.
# Reading the query from a file sidesteps that boundary entirely.
#
# IMPORTANT #2: we query "<word> . <word>" (the word twice), not just the
# word once. Google's translate_tts endpoint has a well-known bug where it
# over-trims what it thinks is leading silence and eats into the actual
# first sound of short clips (documented, e.g., in Home Assistant's own
# google_translate TTS issues) — only the *first* repetition risks getting
# clipped, the second always comes through clean. If ffmpeg is available,
# we detect the gap between the two repetitions (reliably the longest
# silence in the clip, since it's an explicit ". " pause) and trim the
# file down to just that clean second repetition, so players only ever
# hear the word once. Without ffmpeg, the file keeps both repetitions —
# still correct, just says the word twice.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p audio

query_file=".tts_query.tmp"
trap 'rm -f "$query_file"' EXIT

declare -A seen_hash_owner=()

FFMPEG=""
if command -v ffmpeg >/dev/null 2>&1; then
  FFMPEG="ffmpeg"
fi

trim_to_second_repetition(){
  local file="$1"
  local pairs count best split_at tmp
  pairs=$("$FFMPEG" -hide_banner -i "$file" -af silencedetect=noise=-30dB:d=0.15 -f null - 2>&1 \
    | grep -oP '(?<=silence_end: )[0-9.]+|(?<=silence_duration: )[0-9.]+' \
    | paste -d' ' - -)
  count=$(echo "$pairs" | grep -c . || true)
  if [ "$count" -lt 2 ]; then
    return 0
  fi
  best=$(echo "$pairs" | sort -k2,2 -g | tail -1)
  split_at=$(echo "$best" | awk '{v=$1-0.03; if(v<0) v=0; printf "%.3f", v}')
  tmp="${file}.trimmed.mp3"
  if "$FFMPEG" -y -hide_banner -loglevel error -i "$file" -ss "$split_at" -c:a libmp3lame -q:a 4 "$tmp"; then
    mv -f "$tmp" "$file"
  else
    rm -f "$tmp"
  fi
}

fetch_one(){
  local label="$1" lang="$2" text="$3" out="$4"
  printf '%s . %s' "$text" "$text" > "$query_file"

  curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" \
    -G "https://translate.google.com/translate_tts" \
    --data-urlencode "ie=UTF-8" \
    --data-urlencode "tl=${lang}" \
    --data-urlencode "client=tw-ob" \
    --data-urlencode "q@${query_file}" \
    -o "$out"

  if [ ! -s "$out" ]; then
    echo "  x $label got an empty response — leaving no file, re-run the script later" >&2
    rm -f "$out"
    return 1
  fi

  local hash owner
  hash=$(md5sum "$out" | cut -d' ' -f1)
  owner="${seen_hash_owner[$hash]:-}"
  if [ -n "$owner" ]; then
    echo "  ! $label -> identical audio to $owner — check both by ear, this may be a real duplicate query" >&2
  fi
  seen_hash_owner[$hash]="$label"

  if [ -n "$FFMPEG" ]; then
    trim_to_second_repetition "$out"
    echo "fetched $label -> $out (trimmed to single pronunciation)"
  else
    echo "fetched $label -> $out (says it twice — install ffmpeg and re-run to trim)"
  fi
}

while IFS= read -r line; do
  id=$(grep -oP '(?<=id: ")[^"]+' <<< "$line" || true)
  arabic=$(grep -oP '(?<=arabic: ")[^"]+' <<< "$line" || true)
  english=$(grep -oP '(?<=english: ")[^"]+' <<< "$line" || true)
  [ -z "$id" ] && continue
  [ -z "$arabic" ] && continue

  ar_out="audio/${id}.mp3"
  if [ -f "$ar_out" ]; then
    echo "skip   $id ar (already have audio)"
  else
    fetch_one "$id ar" "ar" "$arabic" "$ar_out" || true
    sleep 1
  fi

  # English side. The app needs this locally for the same reason Arabic does:
  # the live translate_tts endpoint is blocked from some origins (GitHub
  # Pages among them), and without a local file the app drops to the much
  # flatter built-in Windows voice.
  en_out="audio/${id}_en.mp3"
  if [ -z "$english" ]; then
    continue
  fi
  if [ -f "$en_out" ]; then
    echo "skip   $id en (already have audio)"
  else
    fetch_one "$id en" "en" "$english" "$en_out" || true
    sleep 1
  fi
done < <(sed -n '/const WORD_BANK = \[/,/^\];/p' words.js | grep -E '^\s*\{\s*id:\s*"w[0-9]+".*arabic:')

# Fixed UI phrase (not a vocabulary word): Listen & Learn's quiz step says
# "<Arabic word>" then this, forming "<word> means...", before the pause
# and the answer. Pre-downloaded for the same reason every word is — the
# live endpoint is blocked from some origins, so without a local file this
# would fall back to a jarringly different-sounding browser voice.
means_out="audio/means.mp3"
if [ -f "$means_out" ]; then
  echo "skip   means (already have audio)"
else
  fetch_one "means" "en" "means" "$means_out" || true
fi

echo "Done."
