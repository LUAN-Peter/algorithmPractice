/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (bloomDay.length  < m * k) {
        return -1;
    }
    const N = bloomDay.length;
    let low = Math.min.apply(null, bloomDay), high = Math.max.apply(null, bloomDay);

    // let low = Number.MAX_SAFE_INTEGER;
    // let high = Number.MIN_SAFE_INTEGER;
    // for (let i = 0; i < N; i++) {
    //     low = Math.min(low, bloomDay[i]);
    //     high = Math.max(high, bloomDay[i]);
    // }
    while (low < high) {
        let middle = parseInt((low + high) / 2);
        if (canMake(middle)) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }
    return low;
    function canMake(target) {
        let result = 0;
        for (let i = 0, tag = 0; i < N; i++) {
            if (bloomDay[i] <= target) {
                tag++;
                if (tag == k) {
                    result++;
                    tag = 0;
                }
            } else {
                tag = 0;
            }
        }
        if (result >= m) {
            return true;
        } else {
            return false;
        }
    }
};