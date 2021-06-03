/**
 * @param {string} s
 * @return {number}
 */
// [M, D, C, L , X, V, I]
var romanToInt = function(s) {
    let result = 0;
    const map = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    const N = s.length;
    for (let i = 0; i < N; i++) {
        if (i + 1 < N && map[s[i]] < map[s[i + 1]]) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};
let input = 'MMMCMXCIX';
let output = romanToInt(input);
console.log(output);