/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
    let result = [];
    let index = 0;
    let zeroCount = 0;
    let oneCount = 0;
    while (index < binary.length && binary[index] == '1') {
        result.push(binary[index]);
        index++;
    }
    while (index < binary.length) {
        if (binary[index] == '0') {
            zeroCount++;
        } else {
            oneCount++;
        }
        index++;
    }
    if (zeroCount >= 2) {
        while (zeroCount > 1) {
            result.push('1');
            zeroCount--;
        }
        result.push('0');
    } else {
        while (zeroCount > 0) {
            result.push('0');
            zeroCount--;
        }
    }
    while (oneCount > 0) {
        result.push('1');
        oneCount--;
    }
    return result.join('');
};
let input = '00011100100';
let output = maximumBinaryString(input);
console.log(output);