// Write a JavaScript program that calculates the size of a Singly Linked list.
// Define a class representing a node in a singly linked list
class Node {
  constructor(data) {
    // Initialize the node with provided data
    this.data = data;
    // Initialize the next pointer to null
    this.next = null;
  }
}

// Define a class representing a singly linked list
class SinglyLinkedList {
  constructor(Head = null) {
    // Initialize the head of the list
    this.Head = Head;
  }

  // Method to add a new node to the end of the list
  add(newNode) {
    // Start traversal from the head node
    let node = this.Head;
    // If the list is empty, set the new node as the head and return
    if (node == null) {
      this.Head = newNode;
      return;
    }
    // Traverse the list until the last node
    while (node.next) {
      node = node.next;
    }
    // Set the next pointer of the last node to the new node
    node.next = newNode;
  }

  // Method to get the size of the linked list
  size() {
    // Start traversal from the head node
    let current = this.Head;
    // Initialize a count variable to store the size of the list
    let count = 0;
    // Traverse the list and increment the count for each node
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Method to display the elements of the list
  displayList() {
    // Start traversal from the head node
    let node = this.Head;
    // Initialize an empty string to store the elements of the list
    var str = "";
    // Traverse the list and concatenate each element to the string
    while (node) {
      str += node.data + "->";
      node = node.next;
    }
    // Append "NULL" to indicate the end of the list
    str += "NULL";
    // Print the string containing the list elements
    console.log(str);
  }
}

// Create an instance of the SinglyLinkedList class
let numList = new SinglyLinkedList();
// Add nodes with data values to the list
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.add(new Node(14));
// Display the elements of the list
console.log("Singly Linked list:");
numList.displayList();
// Display the size of the list
console.log("Size of the said Singly Linked list:");
console.log(numList.size());
// Add more nodes to the list
console.log("Add more elements to the said linked list.");
numList.add(new Node(20));
numList.add(new Node(21));
numList.add(new Node(22));
// Display the updated elements of the list
numList.displayList();
// Display the updated size of the list
console.log("Updated size of the said Singly Linked list:");
console.log(numList.size());
