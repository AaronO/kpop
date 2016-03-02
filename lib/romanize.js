var disassemble = require('./disassemble');
var table = require('./romanization_table');

function romanize(sentence) {
    return sentence.split(' ').map(romanizeWord).join(' ');
}

function romanizeWord(word) {
    return disassemble(word)
    .map(romanizeChar)
    .join('')
    .replace(/^-/, '');
}

// This romanizes a char (really an array) returned by disassemble()
function romanizeChar(char) {
    if(char.length < 2) {
        return  table.INITIALS[char[0]] ||
                table.MEDIALS[char[0]]  ||
                table.FINALS[char[0]]   || char[0];
    }

    var initial = table.INITIALS[char[0]];
    var medial = table.MEDIALS[char[1]];
    var final = table.FINALS[char[2]];

    return [initial, medial, final].filter(Boolean).join('');
}

module.exports = romanize;
module.exports.char = romanizeChar;
module.exports.word = romanizeWord;
