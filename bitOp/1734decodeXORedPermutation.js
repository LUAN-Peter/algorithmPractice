/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
    let N = encoded.length + 1;
    // 前n个XOR
    let total =  (function () {
        if (N % 4 == 0) {
            return N;
        }
        if (N % 4 == 1) {
            return 1;
        }
        if (N % 4 == 2) {
            return N + 1;
        }
        if (N % 4 == 3) {
            return 0;
        }
    })();
    let odd = 0;
    for (let i = 1; i < N - 1; i += 2) {
        odd ^= encoded[i];
    }
    const result = [odd ^ total];
    for (let i = 0; i < N - 1; i++) {
        result.push(result[result.length - 1] ^ encoded[i]);
    }
    return result;
};