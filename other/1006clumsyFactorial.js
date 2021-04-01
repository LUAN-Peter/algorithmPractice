// Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n.
// For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
// We instead make a clumsy factorial: using the integers in decreasing order,
// we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.
// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  
// However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.
// Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.  
// This guarantees the result is an integer.
// Implement the clumsy function as defined above: given an integer N, 
// it returns the clumsy factorial of N.
// Input: 10
// Output: 12
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    const opMap = [
        (a, b) => a * b,
        (a, b) => Math.floor(a / b),
        (a, b) => a + b
    ];
    const PLUS = opMap[2];
    let record  = [];
    let index = N;
    let result = 0;
    (function init() {
        let count = 0;
        while (index > 0 && count <= 3) {
            record.push(index);
            count++;
            index--;
        }
        let temp = record.shift();
        for (let i = 0; i < opMap.length && record.length > 0; i++) {
            temp = opMap[i](temp, record.shift());
        }
        result += temp;
    })()
    while (index) {
        let count = 0;
        while (index > 0 && count <= 3) {
            record.push(index);
            count++;
            index--;
        }
        let temp = record.shift();
        for (let i = 0; i < 2 && record.length > 0; i++) {
            temp = opMap[i](temp, record.shift());
        }
        if (record.length > 0) {
            temp = PLUS(temp, -1 * record.shift());
        }
        result -= temp;
    }
    return result;
};
function clumsyInMath(N) {
    if (N === 1) {
        return 1;
    } else if (N === 2) {
        return 2;
    } else if (N === 3) {
        return 6;
    } else if (N === 4) {
        return 7;
    }

    if (N % 4 === 0) {
        return N + 1;
    } else if (N % 4 <= 2) {
        return N + 2;
    } else {
        return N - 1;
    }
}
let input = 10;
let output1 = clumsy(input);
let output2 = clumsyInMath(input)
console.log(output1, output2);