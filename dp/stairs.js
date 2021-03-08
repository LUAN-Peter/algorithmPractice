/*
    有n个阶梯，
    一个人每一步只能跨一个台阶或是两个台阶，
    问一共有多少种走法？
 */
function countWays(totalNum) {
    // 这个recordWay拿来记录
    let recordWay = {};
    function dbCount(totalNum) {
        // 如果有记录的话直接拿来用
        if (Reflect.has(recordWay, totalNum)) {
            return recordWay[totalNum];
        }
        // 如果是9的话，只有1步
        if (totalNum == 9) {
            Reflect.set(recordWay, 9, 1);
            return recordWay[totalNum];
        }
        // 如果是8的话，只有2步
        if (totalNum == 8) {
            Reflect.set(recordWay, 8, 2);
            return recordWay[totalNum];
        }
        // 关键：a[x] = a[x + 1] + a[x + 2]
        Reflect.set(recordWay, totalNum, dbCount(totalNum + 1) + dbCount(totalNum + 2))
        return recordWay[totalNum];
    }
    dbCount(totalNum);
    return recordWay
}
console.log(countWays(1))