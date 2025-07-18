//61. Rotate List


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
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let sizeNode = head;
  let size = 0;
  while (sizeNode) {
    size++;
    sizeNode = sizeNode.next;
  }

  let a = k % size;
  if (a === 0 || a === size) return head;
  let nthNode = size - a - 1;
  let curr1 = head;

  while (nthNode) {
    curr1 = curr1.next;
    nthNode--;
  }
  let rotateNode = curr1.next;
  curr1.next = null;
  let head1 = rotateNode;
  while (rotateNode.next) {
    rotateNode = rotateNode.next;
  }

  rotateNode.next = head;

  return head1;
};

//link
//https://leetcode.com/problems/rotate-list/description/
