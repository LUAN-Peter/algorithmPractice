// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).
// It is guaranteed the answer fits on a 32-bit signed integer.
// Input: s = "rabbbit", t = "rabbit"
// Output: 3
var numDistinct = function(s, t) {
    const sLen = s.length;
    const tLen = t.length;
    // sentinel
    const dp = new Array(sLen + 1).fill(0).map(() => new Array(tLen + 1).fill(0));
    for (let i = 0; i <= sLen; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <=tLen; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[sLen][tLen];
};
let s = "rabbbit", t = "rabbit";
let output = numDistinct(s, t);
console.log(output)