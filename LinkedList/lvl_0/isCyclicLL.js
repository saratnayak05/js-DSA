// 141. Linked List Cycle

var hasCycle = function (head) {
  // using set in js
  if (!head) return false;

  let nodeSet = new Set();

  let curr = head;
  while (curr) {
    if (nodeSet.has(curr)) {
      return true;
    } else {
      nodeSet.add(curr);
    }
    curr = curr.next;
  }
  return false;

  //    using slow and fast pointer or floyd's algorithm

//   if (!head) return false;

//   let slow = head;
//   let fast = head.next;

//   while (fast && fast.next) {
//     if (slow == fast) {
//       return true;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return false;
};

//link
// https://leetcode.com/problems/linked-list-cycle/description/
