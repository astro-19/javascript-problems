// Write a JavaScript program to get the value of a node at a given position in a Doubly Linked List.

// Define a class for creating nodes of a doubly linked list
class Node {
  constructor(value) {
    this.value = value; // Store the value of the node
    this.next = null; // Pointer to the next node in the list, initially set to null
    this.previous = null; // Pointer to the previous node in the list, initially set to null
  }
}
// Define a class for creating a doubly linked list
class DoublyLinkedList {
  constructor(value) {
    // Initialize the head node with the given value and no next or previous node
    this.head = {
      value: value, // Store the value of the head node
      next: null, // Pointer to the next node in the list, initially set to null
      previous: null, // Pointer to the previous node in the list, initially set to null
    };
    this.length = 0; // Initialize the length of the list to 0
    this.tail = this.head; // Set the tail node to the head node initially
  }
  // Method to add a new node at the end of the list
  add(newNode) {
    // Check if the head is null, indicating an empty list
    if (this.head === null) {
      this.head = newNode; // Set the head to the new node
      this.tail = newNode; // Set the tail to the new node
    } else {
      newNode.previous = this.tail; // Set the previous pointer of the new node to the current tail
      this.tail.next = newNode; // Set the next pointer of the current tail to the new node
      this.tail = newNode; // Update the tail to the new node
    }
    this.length++; // Increment the length of the list
  }
  // Method to insert a new node at a specified position in the list
  insertAt(position, data) {
    if (position < 0 || position > this.length) {
      return false; // Return false if the position is invalid
    }
    var newNode = {
      // Create a new node with the given data
      value: data,
      next: null,
      previous: null,
    };
    if (this.length === 0) {
      // If the list is empty, set the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else if (position === 0) {
      // If inserting at the beginning, update the head
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    } else if (position === this.length) {
      // If inserting at the end, update the tail
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      // Otherwise, find the position and insert the new node
      var current = this.head;
      var index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
      newNode.next = current;
      newNode.previous = current.previous;
      current.previous.next = newNode;
      current.previous = newNode;
    }
    this.length++; // Increment the length of the list
    return true; // Return true to indicate successful insertion
  }
  // Method to get the value of a node at a specified index
  get_Node_Value(index) {
    if (index < 0 || index >= this.length) {
      return null; // Return null if the index is out of bounds
    }
    var current = this.head; // Start from the head of the list
    var count = 0;
    while (count < index) {
      // Iterate through the list until reaching the specified index
      current = current.next;
      count++;
    }
    return current.value; // Return the value of the node at the specified index
  }
  // Method to print the values of the nodes in the list
  printList() {
    let current = this.head; // Start from the head of the list
    let result = []; // Array to store the values of the nodes
    while (current !== null) {
      // Iterate through the list until reaching the end
      result.push(current.value); // Push the value of the current node to the array
      current = current.next; // Move to the next node
    }
    console.log(result.join(" ")); // Log the values of the nodes separated by space
    return this; // Return the DoublyLinkedList object for chaining
  }
}
// Create a new instance of the DoublyLinkedList class
let numList = new DoublyLinkedList();
// Add nodes to the list
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
// Display the original doubly linked list
console.log("Original Doubly Linked List:");
numList.printList();
// Display the value of the node at index 1
console.log("Value at index 1:");
console.log(numList.get_Node_Value(1));
// Display the value of the node at index 5
console.log("Value at index 5:");
console.log(numList.get_Node_Value(5));
// Display the value of the node at index 11 (out of bounds)
console.log("Value at index 11:");
console.log(numList.get_Node_Value(11));
