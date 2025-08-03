// Write a JavaScript program to get the head and tail of a Doubly Linked Lists.
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

  // Method to get the head node of the list
  get_Head() {
    return this.head; // Return the head node
  }

  // Method to get the tail node of the list
  get_Tail() {
    return this.tail; // Return the tail node
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
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(8));
// Display the original doubly linked list
console.log("Original Doubly Linked Lists:");
numList.printList();
// Get and display the head node of the list
console.log("Head");
let ghead = numList.get_Head();
console.log(ghead);
// Get and display the tail node of the list
console.log("Tail");
ghead = numList.get_Tail();
console.log(ghead);
// Create a new doubly linked list
let new_numList = new DoublyLinkedList();
console.log("Original Doubly Linked Lists:");
new_numList.printList();
// Get and display the head node of the new list
console.log("Head");
ghead = new_numList.get_Head();
console.log(ghead);
// Get and display the tail node of the new list
console.log("Tail");
ghead = new_numList.get_Tail();
console.log(ghead);
