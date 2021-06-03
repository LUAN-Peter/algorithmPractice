/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) | 0) + 1);
    }
    console.log(map)
    let record = [];
    for (const [key, value] of map.entries()) {
        record.push([key, value]);
    }

    record.sort((a, b) => Bigger(a, b));// a - b
    console.log(record);
    return record.slice(0, k).map(x => x[0]);
    function Bigger(a, b) {
        if (a[1] != b[1]) {
            return b[1] - a[1];
        }
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;
    }
};
let words = ["i", "love", "leetcode", "i", "love", "coding"], k = 3;
let result = topKFrequent(words, k);
console.log(result);