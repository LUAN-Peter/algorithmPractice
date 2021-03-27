// Given the head of a linked list, rotate the list to the right by k places.
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null) {
        return null;
    }
    let record = [];
    let index = head;
    while (index) {
        record.push(index);
        index = index.next;
    }
    k = k % record.length;
    if (k == 0) {
        return head;
    }    
    record[record.length - k - 1].next = null;
    record[record.length - 1].next = record[0];
    return record[record.length - k];
};