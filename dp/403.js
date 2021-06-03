/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const N = stones.length;
    const dp = new Array(N).fill(0).map((a, x) => new Set());
    if (stones[1] - stones[0] != 1) {
        return false;
    }
    dp[1].add(1);
    for (let i = 2; i < N; i++) {
        check(i)
    }
    if (dp[N - 1].size != 0) {
        return true;
    } else {
        return false;
    }

    function check(target) {
        for (let i = 1; i < target; i++) {
            let distance = stones[target] - stones[i];
            for (const [k, v] of dp[i].entries()) {
                if (k - 1 == distance) {
                    dp[target].add(k - 1);
                }
                if (k == distance) {
                    dp[target].add(k);
                }
                if (k + 1 == distance) {
                    dp[target].add(k + 1);
                }
            }
        }
    }
};
let input = [0,1,3,5,6,8,12,17];
let output = canCross(input);
console.log(output);