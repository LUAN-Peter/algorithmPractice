/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let sum = 0;
    const MAX = 2;
    let left = 0;
    let right = 0;
    const map = new Map();
    while (right < tree.length) {
        while (right < tree.length && map.set(tree[right], (map.get(tree[right]) | 0) + 1).size <= MAX) {
            right++;
        }
        right++;
        sum = Math.max(right - left - 1, sum);
        while (decrement(map, tree[left]).size > MAX) {
            left++;
        }
        left++;
    }
    return sum;
    function decrement(map, tag) {
        if (map.get(tag) == 1) {
            map.delete(tag);
        } else {
            map.set(tag, map.get(tag) - 1);
        }
        return map;
    }
};
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10]
// [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
let input = [0]
let output = totalFruit(input);
console.log(output);