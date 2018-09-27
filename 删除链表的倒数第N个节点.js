/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let item = head, i = 0, obj = {};
    if(!item.next) {
        if(n === 0) {
            return head;
        } else {
            return null;
        }
    }
	while(item.next) {
		obj[i] = item;
		i++;
		item = item.next;
	}
    let j = i;

    obj[j] = obj[--j].next;

	if(i - n + 1 === 0) {
		head = head.next;
	} else if(n === 1) {
        obj[i - 1].next = null;
	} else {
        let beforeDeleteItem = obj[i - n]; 
		let afterDeleteItem = obj[i - n + 2]; 
		beforeDeleteItem.next = afterDeleteItem;
    }
	return head;
};
