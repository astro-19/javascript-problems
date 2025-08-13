// Write a JavaScript program that removes the node from the Doubly linked lists at the specified index.

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
      this.head = newNode; // If the list is empty, set the new node as the head
      this.tail = newNode; // Also set the new node as the tail
    } else {
      newNode.previous = this.tail; // Set the previous pointer of the new node to the current tail node
      this.tail.next = newNode; // Set the next pointer of the current tail node to the new node
      this.tail = newNode; // Update the tail node to the new node
    }
    this.length++; // Increment the length of the list
  }
  delete(index) {
    if (index < 0 || index >= this.length) return null; // Check if the index is valid
    if (index === 0) return this.shift(); // If index is 0, remove the first node
    if (index === this.length - 1) return this.pop(); // If index is the last one, remove the last node
    let current = this.head; // Start from the head of the list
    let ctr = 0; // Counter to track the index
    while (ctr !== index) {
      // Iterate until reaching the node to be removed
      current = current.next; // Move to the next node
      ctr++; // Increment the counter
    }
    current.previous.next = current.next; // Adjust the next pointer of the previous node
    current.next.previous = current.previous; // Adjust the previous pointer of the next node
    this.length--; // Decrement the length of the list
    return current; // Return the removed node
  }
  shift() {
    if (!this.head) return null; // Check if the list is empty
    let old_Head = this.head; // Store the reference to the current head node
    if (this.length === 1) {
      // Check if there is only one node in the list
      this.head = null; // If yes, set head to null
      this.tail = null; // Also set tail to null
    } else {
      // If there are more than one node in the list
      this.head = old_Head.next; // Update the head to the next node
      this.head.previous = null; // Set the previous pointer of the new head to null
      old_Head.next = null; // Set the next pointer of the old head to null
    }
    this.length--; // Decrement the length of the list
    return old_Head; // Return the removed node (old head)
  }
  pop() {
    if (!this.tail) return null; // Check if the list is empty
    let pNode = this.tail; // Store the reference to the current tail node
    if (this.length === 1) {
      // Check if there is only one node in the list
      this.head = null; // If yes, set head to null
      this.tail = null; // Also set tail to null
    } else {
      // If there are more than one node in the list
      this.tail = pNode.previous; // Update the tail to the previous node
      this.tail.next = null; // Set the next pointer of the new tail to null
      pNode.previous = null; // Set the previous pointer of the old tail to null
    }
    this.length--; // Decrement the length of the list
    return pNode; // Return the removed node (old tail)
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
console.log("Remove the node,index = 5");
numList.delete(5);
numList.printList();
console.log("Remove the node,index = 4");
numList.delete(4);
numList.printList();
console.log("Remove the node,index = 2");
numList.delete(2);
numList.printList();
