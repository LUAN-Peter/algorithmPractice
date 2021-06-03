/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const N = nums.length;
    const map = new Map();
    map.set(0, -1);
    let count = 0;
    let result = 0;
    for (let i = 0; i < N; i++) {
        let num = nums[i];
        // 把0看成-1，把问题转换为和为0的最长连续数组。
        if (num) {
            count++;
        } else {
            count--;
        }
        // [a, b]是我们要找的，b为当前位置，如果我们能找到a
        if (map.has(count)) {
            result = Math.max(result, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return result;
};
let input = [0,1,0,0,1,0];
let output = findMaxLength(input);
console.log(output);