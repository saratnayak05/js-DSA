//19. Remove Nth Node From End of List


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    //two pass
//     let sentinel = new ListNode(0,head);
//     let size=0;
//     let curr=head;
//     while(curr){
//         curr=curr.next;
//         size++;
//     }

//     let curr2=sentinel;
//     for(let i=0;i<size-n;i++){
//         curr2=curr2.next;
//     }
//     curr2.next=curr2.next.next;

//     return sentinel.next;


// one pass
let sentinel = new ListNode(0,head);
let fast=sentinel;
let slow=sentinel;


for(let i=0;i<=n;i++){
    fast=fast.next;
}

while(fast !== null){
    fast=fast.next;
    slow=slow.next;
}
slow.next=slow.next.next;

return sentinel.next;

};

//link
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/