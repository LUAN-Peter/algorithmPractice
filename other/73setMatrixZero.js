// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
// Follow up:
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const ROW = matrix.length;
    const COLUMN = matrix[0].length;
    function solveTarget(row, column) {
        for (let i = 0; i < COLUMN; i++) {
            if (matrix[row][i] != 0) {
                matrix[row][i] = null;
            }
        }
        for (let i = 0; i < ROW; i++) {
            if (matrix[i][column] != 0) {
                matrix[i][column] = null;
            } 
        }
        return;
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COLUMN; j++) {
            if (matrix[i][j] == 0) {
                solveTarget(i, j);
            }
        }
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COLUMN; j++) {
            if (matrix[i][j] == null) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};