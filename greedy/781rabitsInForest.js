// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. 
// Those answers are placed in an array.
// Return the minimum number of rabbits that could be in the forest.
// Input: [1, 1, 2]
// Output: 5
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const record = new Map();
    let result = 0;
    for (const answer of answers) {
        if (record.has(answer + 1)) {
            record.set(answer + 1, record.get(answer + 1) + 1);
        } else {
            record.set(answer + 1, 1);
        }
        if (record.get(answer + 1) == (answer + 1)) {
            result += (answer + 1);
            record.delete(answer + 1);
        }
    }
    for (let key of record.keys()) {
        result += key;
    }
    return result;
};