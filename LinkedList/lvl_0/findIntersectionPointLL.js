// 160. Intersection of Two Linked Lists




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {


    //brute-force approch ------T.C O(n^m) S.C O(1)
    //  let curr1 = headA;

    // while (curr1) {
    //     let curr2 = headB;
    //     while (curr2) {
    //         if (curr1 === curr2) return curr1;
    //         curr2 = curr2.next;
    //     }
    //     curr1 = curr1.next;
    // }

    // return null;



    // (Optimal )two pointer approch--T.C O(n+m) S.C O(1)
    let curr1=headA;
    let curr2=headB;
    
    while(curr1 !== curr2){
       curr1=curr1?curr1.next : headB;
       curr2=curr2? curr2.next : headA;
    }
    return curr1;



    //using set--- T.C O(n+m) S.C O(n)
//      let setB = new Set();
//      let curr2=headB;
//       while(curr2){
//         setB.add(curr2);
//         curr2=curr2.next;
//       }
//       let curr1=headA;
//       while(curr1){
//         if(setB.has(curr1)){return curr1}
//         curr1=curr1.next;
//       }
//       return null;



};







// link
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/