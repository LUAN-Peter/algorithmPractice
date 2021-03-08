// Given a collection of intervals, find the minimum number of intervals
// you need to remove to make the rest of the intervals non-overlapping.

let eraseOverlappingIntervals = function(intervals) {
    let len = intervals.length;
    if (len == 0) {
        return 0;
    }
    intervals.sort((a, b) => a[1] - b[1]);
    let result = 1;
    let record = null;
    for (let i = 0, record = intervals[0]; i < len; i++) {
        if (record[1] <= intervals[i][0]) {
            record = intervals[i];
            result++;
        }
    }
    return len - result;
}
let test = [[1,2],[2,3],[3,4],[1,3]];
let result = eraseOverlappingIntervals([1,2])
console.log(result);