// Given a string s which represents an expression, evaluate this expression and return its value. 
// The integer division should truncate toward zero.

var calculate = function(s) {
    const PLUS = 0;
    const MINUS = 1;
    const TIMES = 2;
    const DIVIDE = 3;
    const opMap = {
        '+': PLUS,
        '-': MINUS,
        '*': TIMES,
        '/': DIVIDE
    }
    let sList = init(s);
    let len = sList.length;
    let num = [];
    let ops = [];
    for (let i = 0; i < len; i++) {
        if (opMap[sList[i]] == PLUS || opMap[sList[i]] == MINUS) {
            solve();
            ops.push(opMap[sList[i]]);
        } else if (opMap[sList[i]] == TIMES || opMap[sList[i]] == DIVIDE) {
            let temp = num.pop();
            if (opMap[sList[i]] == TIMES) {
                temp *= Number(sList[i + 1]);
            } else {
                temp = Math.floor(temp / Number(sList[i + 1]));
            }
            i++;
            num.push(temp);
        } else if (isNum(sList[i])) {
            num.push(Number(sList[i]));
        }
    }
    solve();
    return num[0];
    function init(s) {
        let result = [];
        let len = s.length;
        for (let i = 0; i < len; i++) {
            if (s[i] == ' ') {
                continue;
            }
            let temp = [];
            while (i < len && isNum(s[i])) {
                temp.push(s[i]);
                i++;
            }
            if (temp.length != 0) {
                i--;
                result.push(temp.join(''));
            } else {
                result.push(s[i]);
            }
        }
        if (result[0] == MINUS) {
            result.unshift(0);
        }
        return result;
    }
    function isNum(ch) {
        return !Number.isNaN(Number(ch)) && ch != ' ';
    }
    function solve() {
        let result = num.shift();
        while (ops.length != 0) {
            let op = ops.shift();
            if (op == PLUS) {
                let temp = num.shift();
                result += temp;
                continue;
            }
            if (op == MINUS) {
                let temp = num.shift();
                result -= temp;
                continue;
            }
        }
        num.push(result);
        return;
    }
};
let input = " 3 + 5 / 2 ";
let output = calculate(input);
console.log(output);