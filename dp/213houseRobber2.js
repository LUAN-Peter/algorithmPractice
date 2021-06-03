/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp[n] = Max(n + dp[n - 2], dp[n - 1]);
    const N = nums.length;
    if (N == 1) {
        return nums[0];
    }
    let max = Number.MIN_SAFE_INTEGER;
    const houses1 = nums.slice(0, N - 1);
    const dp1 = new Array(N - 1).fill(-1);
    const houses2 = nums.slice(1, N);
    const dp2 = new Array(N - 1).fill(-1);
    dp1[0] = houses1[0];
    dp2[0] = houses2[0];
    if (N > 2) {
        dp1[1] = Math.max(houses1[0], houses1[1]);
        dp2[1] = Math.max(houses2[0], houses2[1]);
    }
    max = Math.max(dp(N - 2, houses1, dp1), dp(N - 2, houses2, dp2));
    return max;
    function dp(n, house, dpList) {
        if (dpList[n] != -1) {
            return dpList[n];
        }
        dpList[n] = Math.max(dp(n - 2, house, dpList) + house[n], dp(n - 1, house, dpList));
        return dpList[n];
    }
};
const input = [200,3,140,20,10];
const output = rob(input);
console.log(output)