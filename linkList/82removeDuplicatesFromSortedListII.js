// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list. Return the linked list sorted as well.
// Input: 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
// Output: 1 -> 2 -> 5

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
// @param {ListNode} head
// @return {ListNode}
var deleteDuplicates = function(head) {
    const dummy = new ListNode(null, head);
    let a = dummy;
    let b = head;
    while (b != null && b.next != null) {
        if (a.next.val == b.next.val) {
            const val = a.next.val;
            while (b != null && b.val == val) {
                b = b.next;
            }
            a.next = b;
        } else {
            a = a.next;
            b = b.next;
        }
    }
    return dummy.next;
};