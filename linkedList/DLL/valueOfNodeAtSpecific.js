// Write a JavaScript program that updates the value of a node at a specific index in a Doubly Linked list.

class Node {
  // Constructor function for creating a new node with a given value
  constructor(value) {
    this.value = value; // Assign the given value to the node
    this.next = null; // Initialize the pointer to the next node as null
    this.previous = null; // Initialize the pointer to the previous node as null
  }
}
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
  add(newNode) {
    if (this.head === null) {
      // If the list is empty
      this.head = newNode; // Set the new node as both head and tail
      this.tail = newNode;
    } else {
      newNode.previous = this.tail; // Set the previous pointer of the new node to the current tail node
      this.tail.next = newNode; // Set the next pointer of the current tail node to the new node
      this.tail = newNode; // Update the tail node to the new node
    }
    this.length++; // Increment the length of the list
  }
  update_Node(index, newValue) {
    if (index < 0 || index > this.length) {
      // If the index is out of bounds
      return false; // Return false indicating failure
    }
    let currentNode = this.head; // Start from the head node
    for (let i = 0; i < index; i++) {
      // Iterate until reaching the node at the specified index
      currentNode = currentNode.next; // Move to the next node
    }
    currentNode.value = newValue; // Update the value of the node at the specified index
    return true; // Return true indicating success
  }
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
let numList = new DoublyLinkedList(); // Create a new instance of the DoublyLinkedList class
numList.add(new Node(2)); // Add nodes to the list
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
console.log("Original Doubly Linked Lists:"); // Print the original list
numList.printList();
console.log("Update Node value: Index = 2, Value = 33"); // Update the value of node at index 2
numList.update_Node(2, 33);
numList.printList();
console.log("Update Node value: Index = 6, Value = 88"); // Update the value of node at index 6
numList.update_Node(6, 88);
numList.printList();
console.log("Update Node value: Index = 1, Value = 55"); // Update the value of node at index 1
numList.update_Node(1, 55);
numList.printList();
