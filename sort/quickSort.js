function quickSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    let index = Math.floor(Math.random() * (end - start)) + start;
    const val = nums[index];
    let i = start, j = end;
    swap(i, index)
    i++;
    while (i < j) {
        if (nums[j] > val) {
            j--;
            continue;
        }
        if (nums[i] < val) {
            i++;
            continue;
        }
        if (nums[j] < val){
            swap(i, j);
            i++;
            continue;
        }
        if (nums[i] > val) {
            swap(i, j);
            j--;
            continue;
        }
    }
    swap(start, i)
    quickSort(nums, start, i - 1);
    quickSort(nums, i + 1, end);
    function swap(a, b) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
        return;
    }
}
const test = [4, 5, 1, 9, 1];
quickSort(test, 0, test.length - 1);
console.log(test);


