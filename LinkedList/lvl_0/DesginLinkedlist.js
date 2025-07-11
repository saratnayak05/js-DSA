//707. Design Linked List

//setup to create node and built linkedlist
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

//that function used to get the value according to index which give as argument
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size || this.head === null) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.value;
};

// that function add the node at the head of linkedlist
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// that function add the node at the ending of the Linkedlist
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

// that function add the node at the index u passed
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  else if (index === 0) {
    this.addAtHead(val);
  } else {
    const newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

//that function delete the node from given index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size || this.head === null) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }
  this.size--;
};

MyLinkedList.prototype.displayLinkedlist = function () {
  if (this.head === null) {
    console.log(`linked list is empty`);
    return;
  }
  let curr = this.head;
  while (curr !== null) {
    console.log(`->${curr.value}`);
    curr = curr.next;
  }
};

//test-area

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
//  var param_1 = obj.get(index)

obj.addAtTail(1);
obj.addAtTail(2);
obj.addAtTail(3);
obj.addAtTail(4);
//  obj.displayLinkedlist()
obj.addAtIndex(2, 5);
obj.addAtHead(6);
obj.deleteAtIndex(4);
//  obj.displayLinkedlist()
console.log(obj.get(2));

// link
//https://leetcode.com/problems/design-linked-list/description/
