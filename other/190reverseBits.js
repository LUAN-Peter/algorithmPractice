/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const num = new Array(32).fill(0);
    let index = 0;
    while (n != 0) {
        let temp = n % 2;
        num[index] = temp;
        n = (n - temp) / 2;
        index++;
    }
    let result = 0;
    while (num.length) {
        let temp = num.shift();
        result = result * 2;
        result += temp;
        console.log(result);
    }
    return result;
};
let input = 4294967293;
let output = reverseBits(input);
console.log(output)
console.log(1610612735 << 1)
// 3221225471 (10111111111111111111111111111111)