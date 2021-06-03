/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var getBiggestThree = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    const mapLeftBottom2RightTop = new Array(M + 1).fill(0).map((a, x) => new Array(N + 1).fill(0));
    const mapLeftTop2RightBottom = new Array(M + 1).fill(0).map((a, x) => new Array(N + 1).fill(0));
    const maxHeap = new MaxPriorityQueue({ priority: (x) => x.value });
    const record = new Set();
    const result = [];
    // 使用sentinel初始化两个前缀和map
    (function init() {
        for (let i = 1; i <= M; i++) {
            for (let j = 1; j <= N; j++) {
                mapLeftBottom2RightTop[i][j] = mapLeftBottom2RightTop[i - 1][j - 1] + grid[i - 1][j - 1];
            }
        }
        for (let i = 1; i <= M; i++) {
            for (let j = N - 1; j >= 0; j--) {
                mapLeftTop2RightBottom[i][j] = mapLeftTop2RightBottom[i - 1][j + 1] + grid[i - 1][j];
            }
        }
    })()
    // 遍历中心
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            // 获取len最大距离
            let maxLen = Math.min(i, j, M - i - 1, N - j - 1);
            for (let len = 0; len <= maxLen; len++) {
                let sum = getSum(i, j, len);
                maxHeap.enqueue({ value: sum })
            }
        }
    }
    // 弹出三个不同
    while (maxHeap.size() != 0 && result.length != 3) {
        let before = record.size;
        let value = maxHeap.dequeue().element.value;
        if (record.size < 3) {
            record.add(value);
            if (record.size > before) {
                result.push(value);
            }
        } else {
            break;
        }
    }
    return result;
    // 获取(x1, y1)到(x2, y2)的距离和
    function getLine(x1, y1, x2, y2) {
        if (x1 > x2) {
            swap()
        }
        if (y1 < y2) {
            return mapLeftBottom2RightTop[x2 + 1][y2 + 1] - mapLeftBottom2RightTop[x1][y1];
        } else {
            return mapLeftTop2RightBottom[x2 + 1][y2] - mapLeftTop2RightBottom[x1][y1 + 1];
        }
       function swap() {
            let temp = x1;
            x1 = x2;
            x2 = temp;
            temp = y1;
            y1 = y2;
            y2 = temp;
            return;
        }
    }
    // 获取以(x, y)为中心, 到端点距离为len的距离
    function getSum(x, y, len) {
        if (len == 0) {
            return grid[x][y];
        }
        let sum = 0;
        sum += getLine(x, y + len, x + len, y);
        sum += getLine(x, y - len, x + len, y);
        sum += getLine(x - len, y, x, y + len);
        sum += getLine(x - len, y, x, y - len);
        sum -= (grid[x][y + len] + grid[x][y - len] + grid[x - len][y] + grid[x + len][y]);
        return sum;
    }
};
let input = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7]
]
let output = getBiggestThree(input);
console.log(output);