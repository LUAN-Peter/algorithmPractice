/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let result = 0;
    const record = new Array(s.length).fill(0);
    const stck = [];
    for (let i = 0; i < s.length; i++) {
        if (stck.length == 0 || s[i] == '(') {
            stck.push([ s[i], i ]);
            continue;
        }
        if (s[i] == ')') {
            if (stck[stck.length - 1][0] == '(') {
                stck.pop();
            } else {
                stck.push([s[i], i]);
            }
            continue;
        }
    }
    for (let i = 0; i < stck.length; i++) {
        record[stck[i][1]] = 1;
    }
    for (let i = 0; i < record.length; i++) {
        if (record[i] == 1) {
            continue;
        }
        let j = i;
        let cnt = 0;
        while (record[j] == 0) {
            cnt++;
            j++;
        }
        result = Math.max(cnt, result);
        i = j;
    }
    return result;
};
let input = "))))())()()(()";
let output = longestValidParentheses(input);
console.log(output);