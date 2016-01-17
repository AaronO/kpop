
// Alphabets
// Extracted from: https://raw.githubusercontent.com/idw111/hangul-disassemble/master/index.js
var CONSONANT = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
var VOWELS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
var LOWER_CONSONANTS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// Korean unicode range
var UNICODE_START = 0xAC00;
var UNICODE_END = 0xD7A3;

function disassemble(str) {
    return str.split('').map(disassembleChar);
}

function disassembleChar(char) {
    // Return vowels and consonants as is
    if(isVowel(char) || isConsonant(char)) {
        return [char];
    }

    // Work on unicode code
    if(!isComplexChar(char)) {
        return [char];
    }

    return breakComplexChar(char);
}

function isVowel(char) {
    return has(VOWELS, char);
}

function isConsonant(char) {
    return has(CONSONANT, char) || has(LOWER_CONSONANTS, char);
}

function has(array, item) {
    return array.indexOf(item) !== -1;
}

function isComplexChar(char) {
    var code = char.charCodeAt(0);
    return (code >= UNICODE_START && UNICODE_END >= code );
}

function breakComplexChar(char) {
    var charCode = char.charCodeAt(0);
    var code = charCode - UNICODE_START;

    var last = code % 28;
    var vowel = ((code - last) / 28) % 21;
    var first = (((code - last) / 28) - vowel) / 21;

    return [
        CONSONANT[first],
        VOWELS[vowel],
        LOWER_CONSONANTS[last],
    ];
}

module.exports = disassemble;
