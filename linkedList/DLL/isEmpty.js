// Write a JavaScript program to check whether a Doubly Linked Lists is empty or not. Return true otherwise false.
// Define a class for a Node in a doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
// Define a class for a Doubly Linked List
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.length = 0;
    this.tail = this.head;
  }
  // Insert node at end of the list
  add(newNode) {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  // Get the size of the linked list
  size() {
    return this.length;
  }
  // Check if the linked list is empty
  is_Empty() {
    return this.length === 0;
  }
  // Print the linked list
  printList() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" "));
    return this;
  }
}
// Create a new doubly linked list
let numList = new DoublyLinkedList();
// Add nodes to the linked list
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(8));
// Display the original doubly linked list
console.log("Original Doubly Linked Lists:");
numList.printList();
// Check if the linked list is empty
let linkedlist_empty = numList.is_Empty();
console.log(
  "Check if the said Doubly Linked lists is empty or not! " + linkedlist_empty
);
// Create a new empty doubly linked list
let new_numList = new DoublyLinkedList();
// Display the new empty doubly linked list
new_numList.printList();
// Check if the new doubly linked list is empty
linkedlist_empty = new_numList.is_Empty();
console.log(
  "Check if the said Doubly Linked lists is empty or not! " + linkedlist_empty
);
