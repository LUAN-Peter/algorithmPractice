var isValidSerialization = function(preorder) {
    let pre = preorder.split(',');
    let len = pre.length;
    let result = [];
    let tag = false;
    for (let i = 0; i < len; i++) {
        if (pre[i] == '#' && tag == true) {
            result.push('#');
            while (ifResolve()) {
                if (result.length < 3) {
                    return false;
                }
                result.pop();
                result.pop();
                result.pop();
                result.push('#');
            }
        }
        if (pre[i] == '#' && tag == false) {
            tag = true;
            result.push('#');
        }
        if (pre[i] != '#') {
            tag = false;
            result.push(pre[i]);
        }
    }
    return result.length == 1 && result[0] == '#';
    function ifResolve() {
        if (result.length >= 2) {
            return result[result.length - 1] == '#' && result[result.length - 2] == '#';
        } else {
            return false;
        }
    }
};
let input = "1,#,#,#,#";
let output = isValidSerialization(input);
console.log(output);