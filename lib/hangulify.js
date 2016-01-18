// Extract from view-source:http://gimite.net/roman2hangul/
var TRIE = require('./hangul_trie');

function hangulify(sentence) {
    return sentence.split(' ').map(hangulifyWord).join(' ');
}

function hangulifyWord(word) {
    var hangul = [];
    var node = TRIE;
    var roman = upper(word);
    // Walk trie backwards to find match
    for (var i = roman.length - 1; i >= 0; --i) {
        var r = roman[i].toUpperCase();
        var next = node[r];
        if (!next && node['$']) {
            hangul.push(node['$']);
            next = TRIE[r];
        }
        if (!next) {
            if (roman[i] != '-') hangul.push(roman[i]);
            next = TRIE;
        }
        node = next;
    }
    if (node['$']) hangul.push(node['$']);
    return hangul.reverse().join('');
}

function upper(str) {
    return str.toLowerCase();
}

module.exports = hangulify;
