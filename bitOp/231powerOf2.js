/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    if ((n & (n - 1)) == 0) {
        return true;
    } else {
        return false;
    }
};
let n = 16;
let result = isPowerOfTwo(n);
console.log(result);