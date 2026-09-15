/* ============================================================
   ARABIC ALPHABET LETTER BANK
   ============================================================
   The 28 letters of the Arabic alphabet, in traditional order, for the
   Arabic Alphabet game (separate from the vocabulary word lists in
   words.js). Each letter is shown in its isolated form — the shape a
   letter takes on its own, not connected to neighbors — since the game
   teaches letter recognition, not handwriting joins.

   id              Must be unique ("l01".."l28"). Kept separate from
                   words.js's "wNNN" ids so both can share the same
                   audio/ folder and the same per-player stats without
                   ever colliding.
   arabic          The bare letter, isolated form, no harakat — this is
                   a recognition game, not a pronunciation-nuance one.
   name            The letter's English name, said aloud by the audio
                   clip and used as a caption in a couple of places.
                   Two pairs of letters share a similar sound in casual
                   transliteration (ت/ط and ح/ه); "(heavy)"/"(light)"
                   distinguishes them without claiming to be a full
                   phonetic guide.
   ============================================================ */

const LETTER_BANK = [
  { id: "l01", arabic: "ا", name: "Alif" },
  { id: "l02", arabic: "ب", name: "Baa" },
  { id: "l03", arabic: "ت", name: "Taa" },
  { id: "l04", arabic: "ث", name: "Thaa" },
  { id: "l05", arabic: "ج", name: "Jeem" },
  { id: "l06", arabic: "ح", name: "Haa (heavy)" },
  { id: "l07", arabic: "خ", name: "Khaa" },
  { id: "l08", arabic: "د", name: "Daal" },
  { id: "l09", arabic: "ذ", name: "Dhaal" },
  { id: "l10", arabic: "ر", name: "Raa" },
  { id: "l11", arabic: "ز", name: "Zaay" },
  { id: "l12", arabic: "س", name: "Seen" },
  { id: "l13", arabic: "ش", name: "Sheen" },
  { id: "l14", arabic: "ص", name: "Saad" },
  { id: "l15", arabic: "ض", name: "Daad" },
  { id: "l16", arabic: "ط", name: "Taa (heavy)" },
  { id: "l17", arabic: "ظ", name: "Dhaa (heavy)" },
  { id: "l18", arabic: "ع", name: "Ayn" },
  { id: "l19", arabic: "غ", name: "Ghayn" },
  { id: "l20", arabic: "ف", name: "Faa" },
  { id: "l21", arabic: "ق", name: "Qaaf" },
  { id: "l22", arabic: "ك", name: "Kaaf" },
  { id: "l23", arabic: "ل", name: "Laam" },
  { id: "l24", arabic: "م", name: "Meem" },
  { id: "l25", arabic: "ن", name: "Noon" },
  { id: "l26", arabic: "ه", name: "Haa (light)" },
  { id: "l27", arabic: "و", name: "Waaw" },
  { id: "l28", arabic: "ي", name: "Yaa" },
];
