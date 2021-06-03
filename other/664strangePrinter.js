/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const N = s.length;
    const record = new Array(N).fill(0).map((a, x) => new Array(N).fill(0));
    (function () {
        for (let i = 0; i < N; i++) {
            record[i][i] = 1;
        }
    })()
    for (let j = 1; j < N; j++) {
        for (let i = j - 1; i >= 0; i--) {
            if (s[i] == s[j]) {
                record[i][j] = record[i][j - 1];
            } else {
                let min = Number.MAX_SAFE_INTEGER;
                for (let index = i; index < j; index++) {
                    min = Math.min(min, record[i][index] + record[index + 1][j]);
                }
                record[i][j] = min;
            }
        }
    }
    return record[0][N - 1];
};
//aabbaaabac
// 0 1 2 3 4 5 6 7 8 9
// a a b b a a a b a c
// 0 1 2 3 4 5
// a b c a b c
let s = "tbgtgb";
console.log(strangePrinter(s));