// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Input: [1, 2, 2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b); // Vital!
    let result = [[]];
    const map = new Map();
    for (num of nums) {
        if (map.has(num)) {
            let start = map.get(num);
            let end = result.length;
            map.set(num, result.length)
            for (let i = start; i < end; i++) {
                let newArray = result[i].slice();
                newArray.push(num);
                result.push(newArray);
            }
        } else {
            let len = result.length;
            map.set(num, result.length);
            for (let i = 0; i < len; i++) {
                let newArray = result[i].slice();
                newArray.push(num);
                result.push(newArray);
            }
        }
    }
    return result;
};