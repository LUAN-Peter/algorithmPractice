// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const record = [];
    let min = Number.MAX_SAFE_INTEGER;
    inorder(root);
    for (let i = 0, j = 1; j < record.length; i++, j++) {
        min = Math.min(min, Math.abs(record[j] - record[i]));
    }
    return min;
    function inorder(root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        record.push(root.val);
        inorder(root.right);
    }
};