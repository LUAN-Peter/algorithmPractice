// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// 1->2->3
//       |
//       v
// 4->5  6
// ^     |
// |     v
// 7<-8<-9
var spiralOrder = function(matrix) {
    const result = [];
    const ROWS = matrix.length;
    const COLUMNS = matrix[0].length;
    const IMVALID = 101;
    const RIGHT = [0, 1];
    const DOWN = [1, 0];
    const LEFT = [0, -1];
    const UP = [-1, 0];
    const DIR = [RIGHT, DOWN, LEFT, UP];
    let curDir = 0;
    let curPos = [0, 0];
    while (result.length != ROWS * COLUMNS) {        
        solve(curPos[0], curPos[1]);
        if (!isValid(curPos[0] + DIR[curDir][0], curPos[1] + DIR[curDir][1])) {
            curDir = (curDir + 1) % 4;
        }
        curPos[0] += DIR[curDir][0];
        curPos[1] += DIR[curDir][1];
    }
    return result;
    function isValid(i, j) {
        if (i < 0 || j < 0 || i >= ROWS || j >= COLUMNS || matrix[i][j] == IMVALID) {
            return false;
        }
        return true;
    }
    function solve(i, j) {
        result.push(matrix[i][j]);
        matrix[i][j] = IMVALID;
    }
};
let input = [[1,2,3],[4,5,6],[7,8,9]];
let output = spiralOrder(input);
console.log(output);