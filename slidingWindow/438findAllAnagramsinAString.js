/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const ans = [];
    const pMap = new Map();
    const sMap = new Map();
    const LEN = p.length;
    let dist = 0;
    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], (pMap.get(p[i]) | 0) + 1);
        sMap.set(p[i], 0);
    }
    let left = 0;
    let right = 0;
    while (right < s.length) {
        while ((right - left) < LEN) {
            if (sMap.get(s[right]) < pMap.get(s[right])) {
                dist++;
            }
            if (sMap.has(s[right])) {
                sMap.set(s[right], sMap.get(s[right]) + 1);
            }
            right++;
        }
        if (dist == LEN) {
            ans.push(left);
        }        
        if (sMap.has(s[left])) {
            sMap.set(s[left], sMap.get(s[left]) - 1);
        }
        if (sMap.get(s[left]) < pMap.get(s[left])) {
            dist--;
        }
        left++;
    }
    return ans;
};
let s = "abab", p = "ab";
let output = findAnagrams(s, p);
console.log(output);