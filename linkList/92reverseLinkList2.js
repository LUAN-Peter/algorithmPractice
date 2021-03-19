// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left == right) {
        return head;
    }
    let setinel = new ListNode(0, head);    
    let before = setinel;
    let index = head;
    let start = null;
    let last = null;
    let count = 1;
    while (count <= right) {
        while (count >= left && count <= right) {
            if (count == left) {
                start = index;
                last = index;
                index = index.next;
                count++;
                continue;
            }
            let temp = index.next;
            index.next = start;
            start = index;
            index = temp;
            if (count == right) {
                before.next = start;
                last.next = index;
                return setinel.next
            }
            count++;
        }
        index = index.next;
        before = before.next;
        count++;
    }
    return setinel.next;
};