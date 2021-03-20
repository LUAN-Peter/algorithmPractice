// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
// Input: ["2","1","+","3","*"]
// Output: 9   Explanation: ((2 + 1) * 3) = 9
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const len = tokens.length;
    const result = [];
    const map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => parseInt(a / b)  // Notice that Math.floor() will be incorrect when (a / b) < 0;
    }
    for (let i = 0; i < len; i++) {
        if (!Number.isNaN(Number(tokens[i]))) {
            result.push(Number(tokens[i]));
        } else {
            const op = map[tokens[i]];
            let b = result.pop();
            let a = result.pop();
            result.push(op(a, b));   
        }
    }
    return result[0];
};