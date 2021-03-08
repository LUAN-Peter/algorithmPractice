// 131. Palindrome Partitioning
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
var partition = function(s) {
    let len = s.length;
    if (len == 0) {
        return []
    }
    let result = [];
    let map = getPalindromeMap();
    function getPalindromeMap() {
        let map = new Array(len).fill(0).map(() => new Array(len).fill(true));
        for (let i = len - 1; i >= 0; i--) {
            for (let j = i + 1; j < len; j++) {
                map[i][j] = (s[i] == s[j] && map[i + 1][j - 1]);
                map[j][i] = map[i][j];
            }
        }
        return map;
    }
    function slice(i, j) {
        return s.slice(i, j + 1);
    }
    function recursive(index, ans) {
        if (index == len) {
            result.push(ans);
            return;
        }
        for (let i = index; i < len; i++) {
            if (map[index][i] == true) {
                let temp = ans.slice();
                temp.push(slice(index, i));
                recursive(i + 1, temp);
            }
        }
    }
    recursive(0, []);
    return result;
};
let s = "aabbba"
let test = partition(s);
console.log(test);