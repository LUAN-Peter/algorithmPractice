// Given the root of a binary tree, return the inorder traversal of its nodes' values.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    function inorder(root) {
        if (!root) {
            return;
        }
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return result;
};