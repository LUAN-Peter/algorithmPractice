var decode = function(encoded, first) {
    let arr = [first];
    for (let i = 0; i < encoded.length; i++){
        let temp = (arr[i] ^ encoded[i])
        arr.push(temp);
    }
    return arr;
};
let encoded = [6,2,7,3], first = 4;
let result = decode(encoded, first);
console.log(result);