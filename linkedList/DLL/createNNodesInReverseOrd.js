// Write a JavaScript program to create a Doubly Linked lists of n nodes and display it in reverse order.
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

  // Method to reverse the doubly linked list
  reverse() {
    let current = this.head; // Start from the head of the list
    let temp = null; // Temporary variable to store the previous node during reversal
    while (current != null) {
      temp = current.previous; // Store the previous node
      current.previous = current.next; // Swap the previous and next pointers of the current node
      current.next = temp;
      current = current.previous; // Move to the next node
    }
    if (temp != null) {
      this.head = temp.previous; // Update the head pointer to the last node after reversal
    }
    return this.head; // Return the head of the reversed list
  }

  // Method to print the values of the nodes in the list
  printList() {
    let current = this.head; // Start from the head of the list
    let result = []; // Array to store the values of the nodes
    while (current !== null) {
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

// Reverse the linked list and display it
console.log("Reverse Linked List:");
numList.reverse();
numList.printList();
