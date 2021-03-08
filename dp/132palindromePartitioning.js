var minCut = function(s) {
    let len = s.length;
    const map = getPalinDromeMap();
    const record = new Array(len).fill(-1);
    record[0] = 0;
    for (let i = 1; i < len; i++) {
        record[i] = solve(i);
    }
    return record[len - 1];
    function getPalinDromeMap() {
        const map = new Array(len).fill(0).map(() => new Array(len).fill(true));
        for (let i = len - 1; i >= 0; i--) {
            for (let j = i + 1; j < len; j++) {
                map[i][j] = s[i] == s[j] && map[i + 1][j - 1];
                map[j][i] = map[i][j];
            }
        }
        return map;
    }
    function solve(target) {
        if (map[0][target] == true) {
            return 0;
        }
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < target; i++) {
            if (map[i + 1][target] == true) {
                min = Math.min(min, record[i] + 1);
            }
        }
        return min;
    }
};
let s = "aab";
let result = minCut(s);
console.log(result);