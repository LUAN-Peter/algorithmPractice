/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    houses = houses.map((a, x) => a - 1);
    const record  = new Array(m).fill(0).map((a, x) => new Array(n).fill(0).map((a, x) => new Array(target).fill(Number.POSITIVE_INFINITY)));
    init();
    for (let a = 1; a < m; a++) {
        for (let b = 0; b < n; b++) {
            if (houses[a] !== -1 && houses[a] !== b) {
                continue;
            }
            for (let c = 0; c < target; c++) {
                for (let j0 = 0; j0 < n; ++j0) {
                    if (b === j0) {
                        record[a][b][c] = Math.min(record[a][b][c], record[a - 1][b][c]);
                    } else if (a > 0 && c > 0) {
                        record[a][b][c] = Math.min(record[a][b][c], record[a - 1][j0][c - 1]);
                    }
                }
                if (record[a][b][c] !== Number.MAX_SAFE_INTEGER && houses[a] === -1) {
                    record[a][b][c] += cost[a][b];
                }
            }
        }
    }
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        result = Math.min(result, record[m - 1][i][target - 1]);
    }
    console.log(record)
    return result;
    function init() {
        if (houses[0] == -1) {
            for (let i = 0; i < n; i++) {
                record[0][i][0] = cost[0][i];
            }
        } else {
            record[0][houses[0]][0] = 0;
        }
        return;
    }
};
// var minCost = function(houses, cost, m, n, target) {
//     // 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
//     houses = houses.map(c => --c);
//     const dp = new Array(m).fill(0)
//                            .map(() => new Array(n).fill(0)
//                            .map(() => new Array(target).fill(Number.POSITIVE_INFINITY)));
    
//     // dp 所有元素初始化为极大值
//     for (let i = 0; i < m; ++i) {
//         for (let j = 0; j < n; ++j) {
//             if (houses[i] !== -1 && houses[i] !== j) {
//                 continue;
//             }
            
//             for (let k = 0; k < target; ++k) {
//                 for (let j0 = 0; j0 < n; ++j0) {
//                     if (j === j0) {
//                         if (i === 0) {
//                             if (k === 0) {
//                                 dp[i][j][k] = 0;
//                             }
//                         } else {
//                             dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k]);
//                         }
//                     } else if (i > 0 && k > 0) {
//                         dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j0][k - 1]);
//                     }
//                 }

//                 if (dp[i][j][k] !== Number.MAX_VALUE && houses[i] === -1) {
//                     dp[i][j][k] += cost[i][j];
//                 }
//             }
//         }
//     }
    
//     let ans = Number.POSITIVE_INFINITY;
//     console.log(dp);
//     for (let j = 0; j < n; ++j) {
//         ans = Math.min(ans, dp[m - 1][j][target - 1]);
//     }
//     return ans === Number.POSITIVE_INFINITY ? -1 : ans;
// };

let houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3;
let result = minCost(houses, cost, m, n, target);
console.log(result);
let fake = [
    [ [ 1, Infinity, Infinity ], [ 10, Infinity, Infinity ] ],
    [ [ 1, 10, Infinity ], [ 10, 1, Infinity ] ],
    [ [ 1, 10, 1 ], [ 10, 1, 10 ] ],
    [ [ 1, 10, 1 ], [ 10, 1, 10 ] ],
    [ [ 6, 15, 6 ], [ 11, 2, 11 ] ]
  ];
let real = [
    [ [ 1, Infinity, Infinity ], [ 10, Infinity, Infinity ] ],
    [ [ Infinity, Infinity, Infinity ], [ 10, 1, Infinity ] ],
    [ [ Infinity, 10, 1 ], [ Infinity, Infinity, Infinity ] ],
    [ [ Infinity, Infinity, Infinity ], [ Infinity, Infinity, 10 ] ],
    [ [ Infinity, Infinity, Infinity ], [ Infinity, Infinity, 11 ] ]
  ]