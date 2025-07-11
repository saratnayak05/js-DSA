// 206. Reverse Linked List

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

// link
// https://leetcode.com/problems/reverse-linked-list/
