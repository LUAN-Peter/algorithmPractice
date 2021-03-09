// Given a string S of lowercase letters, 
// a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.
// It is guaranteed the answer is unique.
// Input: "abbaca"
// Output: "ca"

// Bad Solution
// var removeDuplicates = function(S) {
//     let s = S.split("");
//     if (s.length == 1) {
//         return s;
//     }
//     let last = 0;
//     let cur = 1;
//     while (cur < s.length) {
//         if (s[last] == s[cur]) {
//             s.splice(last, 2);
//             if (last > 0) {
//                 last--;
//                 cur--;
//             }
//         } else {
//             last++;
//             cur++;
//         }
//     }
//     return s.join("");
// };

// Good Solution
var removeDuplicates = function(S) {
    let s = [];
    for (let i = 0; i < S.length; i++) {
        if (s.length != 0 && s[s.length - 1] == S[i]) {
            s.pop();
        } else {
            s.push(S[i]);
        }
    }
    return s.join("")
};
let test = "abbaca"
let result = removeDuplicates(test)
console.log(result)