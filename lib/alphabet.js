// Alphabets
// Extracted from: https://raw.githubusercontent.com/idw111/hangul-disassemble/master/index.js
var INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
var MEDIALS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
var FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// Korean unicode range
var UNICODE_START = 0xAC00;
var UNICODE_END = 0xD7A3;

function isVowel(char) {
    return isMedial(char);
}

function isConsonant(char) {
    return isInitial(char) || isFinal(char);
}

function isInitial(char) {
    return has(INITIALS, char);
}

function isMedial(char) {
    return has(MEDIALS, char);
}

function isFinal(char) {
    return has(FINALS, char);
}

function has(array, item) {
    return array.indexOf(item) !== -1;
}

module.exports = {
    INITIALS: INITIALS,
    MEDIALS: MEDIALS,
    FINALS: FINALS,

    isVowel: isVowel,
    isConsonant: isConsonant,
    isInitial: isInitial,
    isMedial: isMedial,
    isFinal: isFinal,

    UNICODE_START: UNICODE_START,
    UNICODE_END: UNICODE_END,
};
