var calculate = function(s) {
    if (s[0] == "-") {
        s = "0" + s;
    } else {
        s = "0+" + s;
    }
    const PLUS = 0;
    const SUB = 1;
    const op = {
        [PLUS]: function(a, b) {
            return a + b;
        },
        [SUB]: function(a, b) {
            return a - b;
        }
    }
    let len = s.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        console.log(result)
        if (s[i] == " ") {
            continue;
        }
        if (s[i] == "(") {
            result.push(s[i]);
            continue;
        }
        if (s[i] == "+" || s[i] == "-") {
            result.push(s[i]);
            continue;
        }
        if (isNum(s[i])) {
            let record = s[i];
            i++;
            while (i < len && isNum(s[i])) {
                record += s[i];
                i++;
            }
            i--;
            solveBefore(Number(record));
            continue;
        }
        if (s[i] == ")") {
            let record = 0;
            while (result[result.length - 1] != '(') {
                record += result.pop()
            }
            result.pop();
            solveBefore(record);
            continue;
        }
    }
    return result[0];
    function isNum(ch) {
        return !Number.isNaN(Number(ch));
    }
    function solveBefore(num) {
        let sum = num;
        let opTag = null;
        while (result.length != 0 && result[result.length - 1] != '(') {
            let temp = result.pop();
            if (temp == "+") {
                opTag = PLUS;
            }
            if (temp == "-") {
                opTag = SUB;
            }
            if (isNum(temp)) {
                sum = op[opTag](temp, sum);
            }
        }
        result.push(sum);
        return;
    }
};
let input = "-2+1"
let output = calculate(input);
console.log(output);