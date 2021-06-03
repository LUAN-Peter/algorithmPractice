/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    const N = nums.length;
    let sum = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    while (right < N) {
        sum += nums[right];
        while (sum >= target) {
            ans = (right - left + 1) < ans ? (right - left + 1) : ans;
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};