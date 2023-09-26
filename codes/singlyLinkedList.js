// Create a node with a value and a pointer to the next node
var Node = function (val) {
  this.val = val;
  this.next = null;
};

// Create a singly linked list
const SinglyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

// Get function to return value at index
SinglyLinkedList.prototype.get = function (index) {
  // Check if the index is in the boundary
  if (index < 0 || index > this.length) {
    return "Index out of bounds";
  }

  // Define a current value to iterate
  let current = this.head;
  let iterator = 0;

  // Iterate until index
  while (current && iterator != index) {
    current = current.next;
    iterator++;
  }

  // Return the val at index
  return current ? current.val : -1;
};

// Add node to head
SinglyLinkedList.prototype.addAtHead = function (val) {
  // Create a new node
  const newNode = new Node(val);

  // If there is no head make the new node head
  if (!this.head) {
    this.head = newNode;
  } else {
    // Add the new node to the head and set the next to the head
    newNode.next = this.head;
    this.head = newNode;
  }

  // Increase the length
  this.length++;
};

// Add to the tail
SinglyLinkedList.prototype.addAtTail = function (val) {
  // Create a new node
  const newNode = new Node(val);

  // If there is no head make the new node head
  if (!this.head) {
    this.head = newNode;
  } else {
    // Iterate to the end of the linked list and add the node to the last node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  // Increase the length
  this.length++;
};

SinglyLinkedList.prototype.addAtIndex = function (val, index) {
  // Check if the index is in the boundary
  if (index < 0 || index > this.length) {
    return "Index out of bounds";
  }

  // Create a new node
  const newNode = new Node(val);

  // Create a current to iterate, and a previous to locate the new node between previous and current
  let current = this.head;
  let previous = null;
  let iterator = 0;
  while (iterator != index) {
    previous = current;
    current = current.next;
    iterator++;
  }

  previous.next = newNode;
  newNode.next = current;

  // Increase the length
  this.length++;
};

SinglyLinkedList.prototype.deleteAtIndex = function (index) {
  // Check if the index is in the boundary
  if (index < 0 || index > this.length) {
    return "Index out of bounds";
  }

  // If index is 0, remove head
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  // Create a current node to iterate, and a previous to remove the current and make the previous
  // point to the next of the removed node
  let current = this.head;
  let previous = null;
  let iterator = 0;
  while (current && iterator != index) {
    previous = current;
    current = current.next;
    iterator++;
  }

  previous.next = current ? current.next : null;
  current = previous;

  // Decrease the length
  this.length--;
};

// Return the size of the linked list
SinglyLinkedList.prototype.size = function () {
  return this.length;
};
