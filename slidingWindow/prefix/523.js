/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const N = nums.length;
    const record = new Array(N + 1).fill(0);
    const map = new Map();
    map.set(0, 0);
    for (let i = 0; i < N; i++) {
        record[i + 1] = nums[i] + record[i];
        let temp = record[i + 1] % k;
        if (map.has(temp)) {
            if (Math.abs(map.get(temp) - 1 - i) >= 2) {
                return true;
            }
        } else {
            map.set(temp, i + 1);
        }
    }
    return false;
}
const input = [23,2,4,6,7]
let output = checkSubarraySum(input, 6)
console.log(output)