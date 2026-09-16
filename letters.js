/* ============================================================
   ARABIC ALPHABET LETTER BANK
   ============================================================
   The 28 letters of the Arabic alphabet for the Arabic Alphabet game
   (separate from the vocabulary word lists in words.js). Each letter is
   shown in its isolated form — the shape a letter takes on its own, not
   connected to neighbors — since the game teaches letter recognition,
   not handwriting joins.

   Ordered Qaida-style, as used in Noorani Qaida / madrasah children's
   primers: identical to the standard dictionary order except for the
   last four of the 28 letters, where و comes before ه (ن و ه ي, not the
   dictionary's ن ه و ي). ء (hamza) is appended as a 29th entry, as many
   of those same primers teach it -- it isn't part of the 28-letter
   alphabet proper.

   id              Must be unique ("l01".."l29"). Kept separate from
                   words.js's "wNNN" ids so both can share the same
                   audio/ folder and the same per-player stats without
                   ever colliding.
   arabic          The bare letter, isolated form, no harakat — this is
                   a recognition game, not a pronunciation-nuance one.
   name            The letter's English name, used as a caption in a
                   couple of places. Two pairs of letters share a similar
                   sound in casual transliteration (ت/ط and ح/ه);
                   "(heavy)"/"(light)" distinguishes them without
                   claiming to be a full phonetic guide.
   audio           Filename (in audio/alphabet/) of a real person's
                   recording of this letter's name, correct makhraj —
                   used ahead of the Google-voice audio/lNN.mp3 files
                   (see speakLetter() in index.html), which stay in place
                   purely as a fallback if a personal recording is ever
                   missing.
   ============================================================ */

const LETTER_BANK = [
  { id: "l01", arabic: "ا", name: "Alif", audio: "01-alif.mp3" },
  { id: "l02", arabic: "ب", name: "Baa", audio: "02-baa.mp3" },
  { id: "l03", arabic: "ت", name: "Taa", audio: "03-taa.mp3" },
  { id: "l04", arabic: "ث", name: "Thaa", audio: "04-thaa.mp3" },
  { id: "l05", arabic: "ج", name: "Jeem", audio: "05-jeem.mp3" },
  { id: "l06", arabic: "ح", name: "Haa (heavy)", audio: "06-haa.mp3" },
  { id: "l07", arabic: "خ", name: "Khaa", audio: "07-khaa.mp3" },
  { id: "l08", arabic: "د", name: "Daal", audio: "08-daal.mp3" },
  { id: "l09", arabic: "ذ", name: "Dhaal", audio: "09-dhaal.mp3" },
  { id: "l10", arabic: "ر", name: "Raa", audio: "10-raa.mp3" },
  { id: "l11", arabic: "ز", name: "Zaay", audio: "11-zaa.mp3" },
  { id: "l12", arabic: "س", name: "Seen", audio: "12-seen.mp3" },
  { id: "l13", arabic: "ش", name: "Sheen", audio: "13-sheen.mp3" },
  { id: "l14", arabic: "ص", name: "Saad", audio: "14-saad.mp3" },
  { id: "l15", arabic: "ض", name: "Daad", audio: "15-daad.mp3" },
  { id: "l16", arabic: "ط", name: "Taa (heavy)", audio: "16-taa2.mp3" },
  { id: "l17", arabic: "ظ", name: "Dhaa (heavy)", audio: "17-zaa2.mp3" },
  { id: "l18", arabic: "ع", name: "Ayn", audio: "18-ayn.mp3" },
  { id: "l19", arabic: "غ", name: "Ghayn", audio: "19-ghayn.mp3" },
  { id: "l20", arabic: "ف", name: "Faa", audio: "20-faa.mp3" },
  { id: "l21", arabic: "ق", name: "Qaaf", audio: "21-qaaf.mp3" },
  { id: "l22", arabic: "ك", name: "Kaaf", audio: "22-kaaf.mp3" },
  { id: "l23", arabic: "ل", name: "Laam", audio: "23-laam.mp3" },
  { id: "l24", arabic: "م", name: "Meem", audio: "24-meem.mp3" },
  { id: "l25", arabic: "ن", name: "Noon", audio: "25-noon.mp3" },
  { id: "l26", arabic: "و", name: "Waaw", audio: "26-waw.mp3" },
  { id: "l27", arabic: "ه", name: "Haa (light)", audio: "27-haa2.mp3" },
  { id: "l28", arabic: "ي", name: "Yaa" }, // no audio field yet -- 28-yaa.mp3 turned out to actually be hamza (moved to l29 below); falls back to the Google voice until a correct "yaa" recording replaces it
  { id: "l29", arabic: "ء", name: "Hamza", audio: "29-hamza.mp3" },
];
