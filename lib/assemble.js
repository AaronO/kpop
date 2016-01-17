var alpha = require('./alphabet');

function assemble(initial, medial, final) {
    // Alphabet indexes
    var i = indexOf(alpha.INITIALS, initial);
    var m = indexOf(alpha.MEDIALS, medial);
    var f = indexOf(alpha.FINALS, final);

    // Derived from disassemble.js's formula:
    // intial = (((code - final) / 28) - medial) / 21;
    var code = ((i * 21) + m) * 28 + f;

    return String.fromCharCode(code + alpha.UNICODE_START);
}

// Same as .indexOf() except
// -1 ==> 0
function indexOf(arr, x) {
    var idx = arr.indexOf(x);
    return idx !== -1 ? idx : 0;
}

module.exports = assemble;
