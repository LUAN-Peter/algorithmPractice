// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let len = height.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        while (stack.length != 0 && height[i] > height[stack[0]]) {
            let top = stack.shift();
            if (stack.length == 0) {
                break;
            }
            let distance = i - stack[0] - 1;
            let boundary = Math.min(height[i], height[stack[0]]) - height[top];
            let vol = distance * boundary;
            result += vol;
        }
        stack.unshift(i);
    }
    return result;
};
// There is another solution with double pointer.