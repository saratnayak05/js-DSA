//2. Add Two Numbers


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry=0;
    let dummy =new ListNode();
    let newHead=dummy;

    while(l1 || l2 ||  carry ){


        let sum = (!l1? 0: l1.val)+(!l2? 0:l2.val) + carry;

        let digit=sum%10;
        carry=Math.floor(sum/10);
        
        let newNode =new ListNode(digit);
        newHead.next=newNode;
        newHead=newHead.next;   
        

      if(l1) l1=l1.next;
      if(l2) l2=l2.next;

    }
    return dummy.next;
};


// link
//https://leetcode.com/problems/add-two-numbers/description/