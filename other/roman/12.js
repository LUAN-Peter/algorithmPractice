// var intToRoman = function(num) {
//     const list = getList(num);
//     console.log(list);
//     // MMMDCD
//     const LEN = 7;
//     const result = [];
//     const chList = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
//     result.push(getStr(list[0], chList[0]));
//     for (let i = 1; i < LEN; i++){
//         if (i % 2 != 0) {
//             result.push(getStr(list[i], chList[i]));
//             continue;
//         }
//         if (list[i] == 4 && list[i - 1] == 0) {
//             result.push(chList[i] + chList[i - 1]);
//             continue;
//         }
//         if (list[i] == 4 && list[i - 1] == 1) {
//             result.pop();
//             result.push(chList[i] + chList[i - 2]);
//             continue;
//         }
//         result.push(getStr(list[i], chList[i]))
//     }
//     return result.join('');
//     function getList(num) {
//         let temp = num;
//         let M = (num - num % 1000) / 1000;
//         temp -= 1000 * M;
//         let D = (temp - temp % 500) / 500;
//         temp -= 500 * D;
//         let C = (temp - temp % 100) / 100;
//         temp -= 100 * C
//         let L = (temp - temp % 50) / 50;
//         temp -= 50 * L
//         let X = (temp - temp % 10) / 10;
//         temp -= 10 * X
//         let V = (temp - temp % 5) / 5;
//         let I = temp - 5 * V;
//         return [M, D, C, L , X, V, I];
//     }
//     function getStr(num, ch) {
//         let result = [];
//         while (num--) {
//             result.push(ch);
//         }
//         return result.join('');
//     }
// };

var intToRoman = function(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens     = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones     = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    const roman = [];
    roman.push(thousands[Math.floor(num / 1000)]);
    roman.push(hundreds[Math.floor(num % 1000 / 100)]);
    roman.push(tens[Math.floor(num % 100 / 10)]);
    roman.push(ones[num % 10]);
    return roman.join('');
};
let input = 3999;
let output = intToRoman(input);
console.log(output);