/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function isBigger(a, b) {
        let x = parseInt(a.toString() + b.toString());
        let y = parseInt(b.toString() + a.toString());
        if (x >= y) {    // a >= b
            return true;
        } else {
            return false;
        }
    }
    (function quickSort(start, end) {
        if (start >= end) {
            return;
        }
        let index = Math.floor(Math.random() * (end - start)) + start;
        const pivot = nums[index];
        let i = start, j = end;
        swap(index, start);
        while (i < j) {
            while (i < j && isBigger(pivot, nums[j])) {
                j--;
            }
            while (i < j && isBigger(nums[i], pivot)) {
                i++;
            }
            if (i < j) {
                swap(i, j);
            }
        }
        swap(start, i)
        quickSort(start, i - 1);
        quickSort(i + 1, end);
        function swap(a, b) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
            return;
        }
    })(0, nums.length - 1)
    let result = [];
    for (num of nums) {
        result.push(num.toString());
    }
    return result.join('');
};
let input = [8308,8308,830];
let output = largestNumber(input);
console.log(output);