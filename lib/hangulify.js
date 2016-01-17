var alpha = require('./alphabet');
var table = require('./romanization_table');
var assemble = require('./assemble');

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
    for(; currentStr.length > 0;) {
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

    return groupHangulChars(chars)
    .map(function(group) {
        return assemble(group[0], group[1], group[2]);
    }).join('');

    return chars.join('');
}


function groupHangulChars(chars) {
    var groups = [];

    var left = chars;
    for(; left.length > 1;) {
        var group;
        var isVowel = alpha.isVowel(left[0]);
        if(isVowel) {
            group = ['ㅇ', left[0], left[1]];
        } else {
            group = left.slice(0, 3);
        }

        // Add group
        groups.push([group[0], group[1], group[2]]);

        // Advance remainder
        left = left.slice(isVowel ? 2 : 3);
    }

    return groups;
}

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
