var candy = function(ratings) {
    let len = ratings.length;
    if (len == 0) {
        return 0;
    }
    let rateRecord = ratings.map(value => {
        return {
            rate: value,
            num: null
        }
    })
    let rateList = ratings.map((value, index) => {
        return {
            rate: value,
            seq: index,
        }
    });
    rateList.sort((a, b) => {
        return a.rate - b.rate;
    })
    let result = 0;
    for (let i = 0; i < len; i++) {
        if (i == 0) {
            rateRecord[rateList[i].seq].num = 1;
            result += 1;
            continue;            
        }
        distrubuteCandy(rateList[i]);
    }
    function distrubuteCandy(target) {
        function judgeFromRight() {
            let rightNum = rateRecord[target.seq + 1].num;
            let rightRate = rateRecord[target.seq + 1].rate;
            let curRate = target.rate;
            if (rightNum == null) {
                return 1;
            }
            return rightRate == curRate ? 1 : rightNum + 1;
        }
        function judgeFromLeft() {
            let leftNum = rateRecord[target.seq - 1].num;
            let leftRate = rateRecord[target.seq - 1].rate;
            let curRate = target.rate;
            if (leftNum == null) {
                return 1;
            }
            return leftRate == curRate ? 1 : leftNum + 1;
        }
        if (target.seq == 0) {
            let temp = judgeFromRight();
            rateRecord[target.seq].num = temp;
            result += temp;
            return;
        }
        if (target.seq == len - 1) {
            let temp = judgeFromLeft();
            rateRecord[target.seq].num = temp;
            result += temp;
            return;
        }
        let temp = Math.max(judgeFromLeft(), judgeFromRight());
        rateRecord[target.seq].num = temp;
        result += temp;
        return;
    }
    return result;
};
let test = [1, 2, 2];
let result = candy(test);
console.log(result);