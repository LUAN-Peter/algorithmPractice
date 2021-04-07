// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    let left = 0;
    let right = len - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let result = 0
    while (left < right) {
        if (height[left] < height[right]) {
            let next = height[left + 1];
            if (next > leftMax) {
                leftMax = next;
            } else {
                result += (leftMax - next)
            }
            left++;
        } else {
            let last = height[right - 1];
            if (last > rightMax) {
                rightMax = last;
            } else {
                result += (rightMax - last);
            }
            right--;
        }
    }
    return result;
};
// There is another solution with monotonic stack(decreasing).