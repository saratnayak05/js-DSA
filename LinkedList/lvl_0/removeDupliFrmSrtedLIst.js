//83. Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // if(!head) return null;

  // let fast=head.next;
  // let slow=head;

  // while(fast){
  //     if(slow.val!== fast.val){
  //        slow.next=fast;
  //        slow=slow.next;
  //     }
  //     fast=fast.next
  // }
  // slow.next=null;
  // return head;

  //optimize
  let res = head;

  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return res;
};

// link
//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
