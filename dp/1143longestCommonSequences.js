/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const M = text1.length;
    const N = text2.length;
    const dp = new Array(N).fill(0).map((a, x) => new Array(M).fill(0));
    (function init() {
        for (let i = 0; i < M; i++) {
            if (text1[i] == text2[0]) {
                dp[0][i] = 1;
                continue;
            }
            if (i != 0) {
                dp[0][i] = dp[0][i - 1];
            }
        }
        for (let j = 0; j < N; j++) {
            if (text1[0] == text2[j]) {
                dp[j][0] = 1;
                continue;
            }

            if (j != 0) {
                dp[j][0] = dp[j - 1][0];
            }
        }
    })();
    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (text1[j] == text2[i]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[N - 1][M - 1];
};
let text1 = "bl", text2 = "yby";
let output = longestCommonSubsequence(text1, text2);
console.log(output);