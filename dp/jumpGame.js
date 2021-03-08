// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 示例:

// 输入: [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 说明:

// 假设你总是可以到达数组的最后一个位置。

// 链接：https://leetcode-cn.com/problems/jump-game-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let recordWay = {};
    let len = nums.length;
    Reflect.set(recordWay, len - 1, 0);
    function dbCount(start) {
        if (Reflect.has(recordWay, start)) {
            return recordWay[start];
        }
        if (nums[start] + start + 1 >= nums.length) {
            Reflect.set(recordWay, start, 1);
            return 1;
        }
        if (nums[start] == 0) {
            Reflect.set(recordWay, start, 'Infinity');
            return 'Infinity';
        }
        let min = null;
        Reflect.set(recordWay, start, function() {
            for (let i = 0; i < nums[start]; i++) {
                let temp = dbCount(start + i + 1);
                if (temp == 'Infinity') {
                    continue;
                } else {
                    temp++;
                    min = min == null ? temp : (temp < min ? temp : min);
                }
            }
            if (min == null) {
                min = 'Infinity';
                return 'Infinity';
            } else {
                return min;
            }
        }())
        return min;
    }
    dbCount(0);
    return recordWay[0];
};
// var jump = function(nums) {
//     let times = 0;
//     let len = nums.length;
//     let now = 0; // 当前下标
//     while (now + 1 < len) {
//         let longest = null; // 目前最远距离
//         let target = null; // 目前最远距离的下标
//         for (let i = 0; i < nums[now]; i++) {
//             let temp = now + nums[now + i + 1];
//             if (temp + 1 >= len) {
//                 times++;
//                 return times;
//             }
//             if (longest == null || temp > longest) {
//                 longest = temp;
//                 target = now + i + 1;
//             }
//         }
//         times++;
//         now = target;
//     }
//     return times;
// };
let arr = [1, 2, 3];
console.log(jump(arr))
// let arr = []
// console.log(arr[0])˜