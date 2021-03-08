var reconstructQueue = function(people) {
    let total = people.length;
    let peopleList = new Array(total);
    for (let i = 0; i < total; i++) {
        peopleList[i] = null;
    }
    people.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] == b[0]) {
            return b[1] - a[1];
        }
    })
    console.log(people)
    for (let i = 0; i < total; i++) {
        let target = people[i];
        let count = target[1];
        let index = 0;
        while (peopleList[index] != null) {
            index++;
        }
        while (count) {
            if (peopleList[index] == null) {
                count--;
            }
            index++;
        }
        while (peopleList[index] != null) {
            index++;
        }
        peopleList[index] = [target[0], target[1]];
        console.log(index)
        console.log(peopleList)
    }
    return peopleList;
};

let test = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];
let result = reconstructQueue(test);
console.log(result);