// Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. 
// If there is no such window in s that covers all characters in t, return the empty string "".
// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// var minWindow = function(s, t) {
//     const recordT = new Map();
//     const recordMinus = new Map();
//     let tag = false;
//     for (let i = 0; i < t.length; i++) {
//         addMap(recordT, t[i]);
//         recordMinus.set(t[i], 0);
//     }
//     let left = 0;
//     let right = 0;
//     let result = s;
//     while (right < s.length) {
//         if (recordMinus.has(s[right])) {
//             if (recordT.has(s[right])) {
//                 minusMap(recordT, s[right])
//             } else {
//                 addMap(recordMinus, s[right]);
//             }
//         }
//         while (recordT.size == 0) {
//             tag = true;
//             let temp = s.slice(left, right + 1);
//             result = result.length < temp.length ? result : temp;
//             if (recordMinus.get(s[left]) != 0) {
//                 recordMinus.set(s[left], recordMinus.get(s[left]) - 1)
//             } else {
//                 addMap(recordT, s[left]);
//             }
//             left++;
//         }
//         right++;
//     }
//     if (tag) {
//         return result;
//     } else {
//         return "";
//     }
//     function addMap(map, tag) {
//         if (map.has(tag)) {
//             map.set(tag, map.get(tag) + 1);
//         } else {
//             map.set(tag, 1);
//         }
//         return;
//     }
//     function minusMap(map, tag) {
//         if (map.get(tag) > 1) {
//             map.set(tag, map.get(tag) - 1);
//         } else {
//             map.delete(tag);
//         }
//     }
// };
var minWindow = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();
    let distance = 0;
    const LEN = t.length
    for (let i = 0; i < LEN; i++) {
        addMap(mapT, t[i]);
        mapS.set(t[i], 0);
    }
    let left = 0;
    let right = 0;
    let result = s;
    let tag = false;
    while (right < s.length) {
        if (mapS.get(s[right]) < mapT.get(s[right])) {
            distance++;
        }
        if (mapS.has(s[right])) {
            addMap(mapS, s[right]);
        }
        while (distance == LEN) {
            tag = true;
            let temp = s.slice(left, right + 1);
            result = temp.length < result.length ? temp : result;
            if (mapS.get(s[left]) <= mapT.get(s[left])) {
                distance--;
            }
            if (mapS.has(s[left])) {
                mapS.set(s[left], mapS.get(s[left]) - 1);
            }
            left++;
        }
        right++;
    }
    return tag ? result : "";
    function addMap(map, tag) {
        if (map.has(tag)) {
            map.set(tag, map.get(tag) + 1);
        } else {
            map.set(tag, 1);
        }
        return;
    }
};
let s = "ADOBECODEBANC", t = "ABC"
let output = minWindow(s, t);
console.log(output)