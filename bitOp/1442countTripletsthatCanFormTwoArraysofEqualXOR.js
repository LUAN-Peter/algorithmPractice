// Given an array of integers arr.
// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
// Let's define a and b as follows:
// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.
// Return the number of triplets (i, j and k) Where a == b.

/**
 * @param {number[]} arr
 * @return {number}
 */
// var countTriplets = function(arr) {
//     const N = arr.length;
//     const record = [];
//     let result = 0;
//     for (let i = 0, temp = 0; i < arr.length; i++) {
//         record.push(temp ^ arr[i]);
//         temp = record[i];
//     }
//     for (let i = 0; i < N; i++) {
//         for (let j = i + 1; j < N; j++) {
//             for (let k = j; k < N; k++) {
//                 if (getSum(i, j - 1) == getSum(j, k)) {
//                     result++;
//                 }
//             }
//         }
//     }
//     return result;
//     function getSum(a, b) {
//         if (a == b) {
//             return arr[a];
//         }
//         if (a == 0) {
//             return record[b];
//         }
//         return record[b] ^ record[a - 1];
//     }
// };
var countTriplets = function(arr) {
    const n = arr.length;
    s = [0];
    for (const num of arr) {
        s.push(s[s.length - 1] ^ num);
    }
    console.log(s);
    const cnt = new Map(), total = new Map();
    let ans = 0;
    for (let k = 0; k < n; k++) {
        if (cnt.has(s[k + 1])) {
            ans += cnt.get(s[k + 1]) * k - total.get(s[k + 1]);
        }
        cnt.set(s[k], (cnt.get(s[k]) || 0) + 1);
        total.set(s[k], (total.get(s[k]) || 0) + k);
    }

    return ans;
};
let input = [2,3,1,6,7];
let output = countTriplets(input);
console.log(output)