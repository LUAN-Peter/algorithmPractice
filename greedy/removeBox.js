var removeBoxes = function(boxes) {
    let scores = 0;
    let boxesList = [];
    function init() {
        let len = boxes.length;
        let index = 0;
        for(let i = 0; i < len; i++) {
            if (boxesList.length == 0) {
                boxesList.push([ boxes[i] ]);
                continue;
            }
            if (boxes[i] != boxesList[index][0]) {
                boxesList.push([ boxes[i] ]);
                index++;
                continue;
            }
            if (boxes[i] == boxesList[index][0]) {
                boxesList[index].push( boxes[i] )
            }
        }
    }
    init();
    return boxesList;
};
let arr = [1,3,2,2,2,3,4,3,1];
console.log(removeBoxes(arr))