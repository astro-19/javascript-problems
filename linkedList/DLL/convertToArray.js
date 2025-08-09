// Write a JavaScript program to convert a Doubly Linked lists into an array and returns it.
// Define a class for creating nodes of a doubly linked list
class Node {
  // Constructor function for creating a new node with a given value
  constructor(value) {
    this.value = value; // Assign the given value to the node
    this.next = null; // Initialize the pointer to the next node as null
    this.previous = null; // Initialize the pointer to the previous node as null
  }
}

// Define a class for creating a doubly linked list
class DoublyLinkedList {
  // Constructor function for creating a new doubly linked list with a head node having the given value
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
    if (this.head === null) {
      // Check if the list is empty
      this.head = newNode; // If empty, set the new node as the head
      this.tail = newNode; // Also set the new node as the tail
    } else {
      // If list is not empty
      newNode.previous = this.tail; // Set the previous pointer of the new node to the current tail node
      this.tail.next = newNode; // Set the next pointer of the current tail node to the new node
      this.tail = newNode; // Update the tail node to the new node
    }
    this.length++; // Increment the length of the list
  }

  // Method to convert the doubly linked list into an array
  convert_to_Array() {
    if (!this.head) return []; // If the list is empty, return an empty array
    let current = this.head; // Start from the head of the list
    let result = []; // Array to store the values of the nodes
    while (current != null) {
      // Iterate through the list until reaching the end
      result.push(current.value); // Push the value of the current node to the array
      current = current.next; // Move to the next node
    }
    return result; // Return the array containing the values of the nodes
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
console.log("Original Doubly Linked Lists:");
numList.printList();
console.log("Converts the said Double Linked Lists into an array");
result = numList.convert_to_Array();
console.log(result);

// Create a new instance of the DoublyLinkedList class
let numList1 = new DoublyLinkedList();
console.log("Original Doubly Linked Lists:");
numList1.printList();
console.log("Converts the said Double Linked Lists into an array");
result = numList1.convert_to_Array();
console.log(result);
