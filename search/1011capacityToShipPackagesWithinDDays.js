/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    const N = weights.length;
    let max = 0;
    let min = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        max += weights[i];
        min = weights[i] > min ? weights[i] : min;
    }
    while (min < max) {
        let mid = Math.floor((min + max) / 2);
        if (feasible(mid)) {
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    return min;
    function feasible(overload) {
        let times = 0;
        let cur = 0;
        for (const weight of weights) {
            if (cur + weight > overload) {
                times++;
                cur = 0;
            }
            cur += weight;
        }
        if (cur != 0) {
            times++;
        }
        if (times > D) {
            return false;
        } else {
            return true;
        }
    }
};
let input = [1,2,3,4,5,6,7,8,9,10]
let D = 5;
let result = shipWithinDays(input, D);
console.log(result);