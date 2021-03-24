// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
// Return true if there is a 132 pattern in nums, otherwise, return false.
// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?
// Input: [1,3,2,4,5,6,7,8,9,10]
// Output: true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const len = nums.length;
    if (len < 3) {
        return false;
    }
    let bList = [nums[len - 1]];
    let c = Number.MIN_SAFE_INTEGER;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < c) {
            return true;
        }
        while (bList.length != 0 && nums[i] > bList[0]) {
            let temp = bList.shift();
            c = temp;
        }
        if (nums[i] > c) {
            bList.unshift(nums[i]);
        }
    }
    return false;
};