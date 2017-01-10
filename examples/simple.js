const kpop = require('kpop');

// Convert hangul to roman letters
kpop.romanize('안녕하세요 저는 애론');
// => 'annyeonghaseyo jeoneun aelon'

// Convert romanized korean to hangul
kpop.hangulify('yeoboseyo');
// => '여보세요'
