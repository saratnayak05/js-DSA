//876. Middle of the Linked List

//linkedList implementation
/* code */


var middleNode = function (head) {
  // let curr=head;
  // let size=0;
  // while(curr !== null){
  //     curr=curr.next;
  //     size++;
  // }
  // let mid=head;
  // for(let i=0;i<Math.floor(size/2);i++){
  //     mid=mid.next;
  // }
  // return mid;

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//link
// https://leetcode.com/problems/middle-of-the-linked-list/
