/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] == nums[i]) {
            count++;
        } else {
            count = 1;
        }
        if (count > 2) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};