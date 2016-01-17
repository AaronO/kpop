var table = require('./romanization_table');

// Inverted romanization table
var INVERTED_TABLE = invert(merge([table.INITIALS, table.MEDIALS, table.FINALS]));
// All possible roman prefixes (longest first)
var ROMAN_PREFIXES = Object.keys(INVERTED_TABLE);
ROMAN_PREFIXES.sort(byLength);

function hangulify(sentence) {
    return sentence.split(' ').map(hangulifyWord).join(' ');
}

function hangulifyWord(word) {
    var str = lower(word);

    // Korean chars we found
    var chars = [];
    var currentStr = str;
    for(; currentStr.length > 1;) {
        // Get slices for remainder
        var slices = sliceWord(currentStr);
        var prefix = slices.filter(function(str) {
            return str in INVERTED_TABLE;
        })[0];
        // Nothing left to decipher
        if(!prefix) {
            chars.push(currentStr);
            break;
        }

        // Add char we found
        chars.push(INVERTED_TABLE[prefix]);
        // Adjust currentStr
        currentStr = currentStr.slice(prefix.length);
    }

    return chars.join('');
}


function groupHangulChars() {}

function combineChars(initial, medial, final) {

}

// Invert an object (key => value, value => key)
function invert(obj) {
    var accu = {};
    for(var key in obj) {
        accu[obj[key]] = key;
    }
    return accu;
}

// Merge a list of objects
function merge(objects) {
    return objects.reduce(function(accu, obj) {
        for(var key in obj) {
            accu[key] = obj[key];
        }
        return accu;
    }, {});
}

// Break a word up into slice:
// "abc" => [
//   "abc",
//   "ab",
//   "a"
// ]
function sliceWord(word) {
    return range(word.length).map(function(n) {
        return word.slice(0, word.length-n);
    });
}

function range(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

function byLength(x) {
    return (x && x.length) || 0;
}

function lower(str) {
    return str.toLowerCase();
}

module.exports = hangulify;
