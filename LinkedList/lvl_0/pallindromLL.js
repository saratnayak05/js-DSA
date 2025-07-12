//234. Palindrome Linked List

var isPalindrome = function (head) {
  //approch-1

  // let arr=[];
  // let curr=head;
  // while(curr){
  //    arr.push(curr.val);
  //    curr=curr.next;
  // }

  // let i=0;j=arr.length-1;
  // while(i<j){
  //     if(arr[i] !== arr[j]){ return false}
  //     else{
  //         i++;
  //         j--;
  //     }
  // }
  // return true;

  //approch-2

  //middle of the linkedList
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  //comparing both LL
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val != secondList.val) return false;
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};

// link
//https://leetcode.com/problems/palindrome-linked-list/description/
