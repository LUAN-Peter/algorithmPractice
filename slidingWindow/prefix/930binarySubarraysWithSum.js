/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const N = nums.length;
    const prefix = new Array(N + 1).fill(0);
    const map = new Map();
    let ans = 0;
    for (let i = 0; i < N; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    for (let i = 0; i < prefix.length; i++) {
        // 如果16～18 <=> 19，可以空数组
        if (prefix[i] >= goal) {
            ans += (map.get(prefix[i] - goal) | 0);
        }
        map.set(prefix[i], (map.get(prefix[i]) | 0) + 1);
    }
    return ans;
};
let nums = [1,0,1,0,1], goal = 2;
let output = numSubarraysWithSum(nums, goal);
console.log(output);