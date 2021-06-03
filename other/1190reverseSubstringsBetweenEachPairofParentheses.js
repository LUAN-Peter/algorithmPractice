/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const N = s.length;
    const record = new Array(N).fill(null);
    let result = ''
    for (let i = 0, temp = []; i < N; i++) {
        if (s[i] == '(') {
            temp.push(i);
            continue;
        }
        if (s[i] == ')') {
            let last = temp.pop();
            record[last] = i;
            record[i] = last;
            continue;
        }
    }
    let index = 0;
    let tag = 0; // 0: 2Right; 1: 2Left
    while (index < N) {
        if (record[index] == null) {
            result += s[index];
        } else {
            index = record[index];
            changeDir();
        }
        move();
    }
    return result;
    function changeDir() {
        tag ^= 1;
        return;
    }
    function move() {
        if (tag == 0) {
            index++;
        } else {
            index--;
        }
        return;
    }
};
let s = "(ed(et(oc))el)";
let result = reverseParentheses(s);
console.log(result);