/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const ROW = matrix.length;
    const COLUMN = matrix[0].length;
    return binarySearch(0, ROW * COLUMN - 1, target);
    function binarySearch(start, end, target) {
        if (start > end) {
            return false;
        }
        let middleIndex = parseInt((end + start) / 2);
        let middle = matrix[Math.floor(middleIndex / COLUMN)][middleIndex % COLUMN];
        if (middle == target) {
            return true;
        }
        if (middle > target) {
            return binarySearch(start, middleIndex - 1, target);
        }
        if (middle < target) {
            return binarySearch(middleIndex + 1, end, target);
        }
    }
};
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
let output = searchMatrix(matrix, target);
console.log(output); 