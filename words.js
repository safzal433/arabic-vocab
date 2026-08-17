/* ============================================================
   ARABIC VOCABULARY WORD BANK
   ============================================================
   This is the ONLY file you need to touch to add, edit, or
   remove words or word lists. The game reads this automatically.

   Words are grouped into "lists" (see WORD_LISTS below) — a player
   picks which list(s) they're working on (right after choosing their
   name, or any time from the home screen), and every game mode only
   draws from the lists they've selected.

   HOW TO ADD A WORD TO AN EXISTING LIST
   --------------------------------------
   Copy a line, paste it before that list's closing "]", and fill in:

     { id: "w051", arabic: "شَجَرَة", transliteration: "shajara", english: "tree", category: "nature", list: "starter" },

   HOW TO ADD A WHOLE NEW LIST
   -----------------------------
   1. Add an entry to WORD_LISTS below with a new unique id + display name.
   2. Add word entries anywhere in WORD_BANK with that list id.

   FIELD GUIDE
   -----------
   id             Must be UNIQUE across every word, in every list. Keep
                   counting up (the highest so far is w050). Never reuse
                   an id — a player's stats are tracked by id, so reusing
                   one mixes up their progress.
   arabic          The Arabic word, with harakat (short vowel marks)
                   included wherever possible — it keeps pronunciation
                   consistent for a beginner reader.
   transliteration A simple phonetic spelling, just for the grown-up's
                   reference (shown as a small hint on one flashcard
                   face). Not used in quizzes.
   english         The English translation, shown/quizzed on. Keep it
                   short, matching what should appear as a multiple-
                   choice answer.
   category        A short lowercase label, e.g. "phrases", "classroom",
                   "family". Used to choose sensible wrong answers in
                   multiple choice. Reuse an existing category when it
                   fits, or invent a new one — nothing else to update.
   list            Which WORD_LISTS entry (by id) this word belongs to.

   After saving this file, just refresh the game in the browser. New words
   will work right away (using the live online voice as a fallback) — run
   generate_audio.sh afterward to download their offline audio file too.
   ============================================================ */

const WORD_LISTS = [
  { id: "starter", name: "Names & Classroom" },
  { id: "home-family", name: "Family & Character" },
];

const WORD_BANK = [
  // ============================================================
  // LIST: Names & Classroom (starter)
  // ============================================================

  // Phrases / greetings
  { id: "w001", arabic: "اِسْم", transliteration: "ism", english: "name", category: "phrases", list: "starter" },
  { id: "w002", arabic: "اِسْمِي", transliteration: "ismi", english: "my name", category: "phrases", list: "starter" },
  { id: "w003", arabic: "اِسْمُكَ", transliteration: "ismuka", english: "your name (Masculine)", category: "phrases", list: "starter" },
  { id: "w004", arabic: "اِسْمُكِ", transliteration: "ismuki", english: "your name (Feminine)", category: "phrases", list: "starter" },
  { id: "w005", arabic: "مَا", transliteration: "maa", english: "what", category: "phrases", list: "starter" },
  { id: "w006", arabic: "عَلَى", transliteration: "ala", english: "on", category: "phrases", list: "starter" },
  { id: "w007", arabic: "اَلسَّلَام", transliteration: "as-salaam", english: "peace", category: "phrases", list: "starter" },
  { id: "w008", arabic: "هَٰذَا", transliteration: "haadha", english: "this (Masculine)", category: "phrases", list: "starter" },
  { id: "w009", arabic: "هَٰذِهِ", transliteration: "haadhihi", english: "this (Feminine)", category: "phrases", list: "starter" },

  // Classroom objects
  { id: "w010", arabic: "خَرِيطَة", transliteration: "khareeta", english: "map", category: "classroom", list: "starter" },
  { id: "w011", arabic: "لَوْح", transliteration: "lawh", english: "board", category: "classroom", list: "starter" },
  { id: "w012", arabic: "كُرْسِيّ", transliteration: "kursiyy", english: "chair", category: "classroom", list: "starter" },
  { id: "w013", arabic: "مَكْتَب", transliteration: "maktab", english: "desk", category: "classroom", list: "starter" },
  { id: "w014", arabic: "بَاب", transliteration: "baab", english: "door", category: "classroom", list: "starter" },
  { id: "w015", arabic: "نَافِذَة", transliteration: "naafidha", english: "window", category: "classroom", list: "starter" },
  { id: "w016", arabic: "جِدَار", transliteration: "jidaar", english: "wall", category: "classroom", list: "starter" },

  // School / grade levels
  { id: "w017", arabic: "اَلرَّوْضَة", transliteration: "ar-rawda", english: "Kindergarten", category: "school", list: "starter" },
  { id: "w018", arabic: "اَلصَّفِّ الأَوَّل", transliteration: "as-saff al-awwal", english: "1st grade", category: "school", list: "starter" },
  { id: "w019", arabic: "اَلصَّفِّ الثَّانِي", transliteration: "as-saff ath-thaani", english: "2nd grade", category: "school", list: "starter" },
  { id: "w020", arabic: "اَلصَّفِّ الثَّالِث", transliteration: "as-saff ath-thaalith", english: "3rd grade", category: "school", list: "starter" },

  // ============================================================
  // LIST: Family & Character (home-family)
  // ============================================================

  // Phrases
  { id: "w021", arabic: "أَنْتَ", transliteration: "anta", english: "you (Masculine)", category: "phrases", list: "home-family" },
  { id: "w022", arabic: "أَنْتِ", transliteration: "anti", english: "you (Feminine)", category: "phrases", list: "home-family" },
  { id: "w023", arabic: "أَنَا", transliteration: "ana", english: "I am", category: "phrases", list: "home-family" },
  { id: "w037", arabic: "عِنْدِي", transliteration: "indi", english: "I have", category: "phrases", list: "home-family" },
  { id: "w038", arabic: "اِسْمُهُ", transliteration: "ismuhu", english: "his name", category: "phrases", list: "home-family" },
  { id: "w039", arabic: "اِسْمُهَا", transliteration: "ismuha", english: "her name", category: "phrases", list: "home-family" },
  { id: "w040", arabic: "أَسْكُنُ", transliteration: "askunu", english: "I live", category: "phrases", list: "home-family" },

  // Classroom supplies
  { id: "w024", arabic: "مِسْطَرَة", transliteration: "mistara", english: "ruler", category: "classroom", list: "home-family" },
  { id: "w025", arabic: "مِمْحَاة", transliteration: "mimhaah", english: "eraser", category: "classroom", list: "home-family" },
  { id: "w026", arabic: "مِبْرَاة", transliteration: "mibraah", english: "sharpener", category: "classroom", list: "home-family" },
  { id: "w027", arabic: "وَرَقَة", transliteration: "waraqa", english: "paper", category: "classroom", list: "home-family" },
  { id: "w028", arabic: "دَفْتَر", transliteration: "daftar", english: "notebook", category: "classroom", list: "home-family" },
  { id: "w029", arabic: "قَلَم", transliteration: "qalam", english: "pencil", category: "classroom", list: "home-family" },
  { id: "w030", arabic: "كِتَاب", transliteration: "kitaab", english: "book", category: "classroom", list: "home-family" },

  // Family
  // Note: the sheet listed جَدِّي as "my grandmother" — that's almost
  // certainly a typo carried over from the source sheet. جَدِّي (jaddi)
  // is "my grandfather"; جَدَّتِي (jaddati), with the added تِي, is "my
  // grandmother". Corrected here — flag if that wasn't the intent.
  { id: "w031", arabic: "أُمِّي", transliteration: "ummi", english: "my mother", category: "family", list: "home-family" },
  { id: "w032", arabic: "أَبِي", transliteration: "abi", english: "my father", category: "family", list: "home-family" },
  { id: "w033", arabic: "جَدِّي", transliteration: "jaddi", english: "my grandfather", category: "family", list: "home-family" },
  { id: "w034", arabic: "جَدَّتِي", transliteration: "jaddati", english: "my grandmother", category: "family", list: "home-family" },
  { id: "w035", arabic: "أَخِي", transliteration: "akhi", english: "my brother", category: "family", list: "home-family" },
  { id: "w036", arabic: "أُخْتِي", transliteration: "ukhti", english: "my sister", category: "family", list: "home-family" },

  // Character traits
  { id: "w041", arabic: "صَادِق", transliteration: "sadiq", english: "honest", category: "character", list: "home-family" },
  { id: "w042", arabic: "كَاذِب", transliteration: "kadhib", english: "liar", category: "character", list: "home-family" },
  { id: "w043", arabic: "نَشِيط", transliteration: "nashiit", english: "active", category: "character", list: "home-family" },
  { id: "w044", arabic: "كَسُول", transliteration: "kasuul", english: "lazy", category: "character", list: "home-family" },
  { id: "w045", arabic: "لَطِيف", transliteration: "latiif", english: "kind", category: "character", list: "home-family" },
  { id: "w046", arabic: "لَئِيم", transliteration: "la'iim", english: "mean", category: "character", list: "home-family" },
  { id: "w047", arabic: "مُرَتَّب", transliteration: "murattab", english: "neat", category: "character", list: "home-family" },
  { id: "w048", arabic: "فَوْضَوِي", transliteration: "fawdawi", english: "messy", category: "character", list: "home-family" },
  { id: "w049", arabic: "أَمِين", transliteration: "amiin", english: "trustworthy", category: "character", list: "home-family" },
  { id: "w050", arabic: "خَائِن", transliteration: "kha'in", english: "traitor", category: "character", list: "home-family" },
];
