// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
// Input: 3
// Output: [1,2,3,6,9,8,7,4,5]
// 1->2->3
//       |
//       v
// 4->5  6
// ^     |
// |     v
// 7<-8<-9
var generateMatrix = function(n) {
    let result = new Array(n).fill(0).map(() => new Array(n).fill(null));
    let cur = 1;
    for (let i = 0; i < n; i++) {
        circle(i);
    }
    return result;
    function circle(a) {
        const LEFT_MARGIN = a;
        const RIGHT_MARGIN = n - a - 1;
        const TOP_MARGIN = a;
        const BOTTOM_MARGIN = n - a - 1;
        for (let i = LEFT_MARGIN; i <= RIGHT_MARGIN; i++) {
            result[TOP_MARGIN][i] = cur;
            cur++;
        }
        for (let i = TOP_MARGIN + 1; i <= BOTTOM_MARGIN; i++) {
            result[i][RIGHT_MARGIN] = cur;
            cur++;
        }
        for (let i = RIGHT_MARGIN - 1; i >= LEFT_MARGIN; i--) {
            result[BOTTOM_MARGIN][i] = cur;
            cur++;
        }
        for (let i = BOTTOM_MARGIN - 1; i > TOP_MARGIN; i--) {
            result[i][LEFT_MARGIN] = cur;
            cur++;
        }
    }
};
let input = 3;
let output = generateMatrix(input);
console.log(output);