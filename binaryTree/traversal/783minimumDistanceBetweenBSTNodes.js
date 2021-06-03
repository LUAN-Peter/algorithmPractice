// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
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