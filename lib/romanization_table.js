// Extracted from: https://en.wikipedia.org/wiki/Hangul_consonant_and_vowel_tables
var INITIALS = {
    // Consonants
    'ㄱ': 'g',
    'ㄴ': 'n',
    'ㄷ': 'd',
    'ㄹ': 'l',
    'ㅁ': 'm',
    'ㅂ': 'b',
    'ㅅ': 's',
    'ㅇ': '-',
    'ㅈ': 'j',
    'ㅊ': 'ch',
    'ㅋ': 'k',
    'ㅌ': 't',
    'ㅍ': 'p',
    'ㅎ': 'h',
    // Double consonants
    'ㄲ': 'kk',
    'ㄸ': 'tt',
    'ㅃ': 'pp',
    'ㅆ': 'ss',
    'ㅉ': 'jj',
};
var MEDIALS = {
    // Vowels
    'ㅏ': 'a',
    'ㅓ': 'eo',
    'ㅗ': 'o',
    'ㅜ': 'u',
    'ㅡ': 'eu',
    'ㅣ': 'i',
    'ㅐ': 'ae',
    'ㅔ': 'e',
    'ㅚ': 'oe',
    'ㅟ': 'ui',
    'ㅢ': 'eui',
    // Vowels (y+)
    'ㅑ': 'ya',
    'ㅕ': 'yeo',
    'ㅛ': 'yo',
    'ㅠ': 'yu',
    'ㅒ': 'yae',
    'ㅖ': 'ye',
    // Vowels (w+)
    'ㅘ': 'wa',
    'ㅝ': 'weo',
    'ㅙ': 'wae',
    'ㅞ': 'we',
};
var FINALS = {
    // Finals
    'ㄱ': 'g',
    'ㄴ': 'n',
    'ㄷ': 'd',
    'ㄹ': 'l',
    'ㅁ': 'm',
    'ㅂ': 'b',
    'ㅅ': 's',
    'ㅇ': 'ng',
    'ㅈ': 'j',
    'ㅊ': 'ch',
    'ㅋ': 'k',
    'ㅌ': 't',
    'ㅍ': 'p',
    'ㅎ': 'h',

    'ㄲ': 'kk',
    'ㄵ': 'nj',
    'ㄺ': 'lg',
    'ㅄ': 'bs',
    'ㅆ': 'ss',

    'ㄳ': 'gs',
    'ㄶ': 'nh',
    'ㄻ': 'lm',

    'ㄼ': 'lb',
    'ㄽ': 'ls',
    'ㄾ': 'lt',
    'ㄿ': 'lp',
    'ㅀ': 'lh',
};

module.exports = {
    INITIALS: INITIALS,
    MEDIALS: MEDIALS,
    FINALS: FINALS,
};
