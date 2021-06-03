/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const gaps = new Map();
    let maxGaps = 0;
    for (const row of wall) {
        let result = 0;
        for (let i = 0; i < row.length - 1; i++) {
            let brick = row[i];
            result += brick;
            if (gaps.has(result)) {
                gaps.set(result, gaps.get(result) + 1);
            } else {
                gaps.set(result, 1);
            }
            maxGaps = Math.max(maxGaps, gaps.get(result));
        }
    }
    return wall.length - maxGaps;
};