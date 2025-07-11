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

  // Method to reverse the elements of the list
  reverse_list() {
    // Initialize variables to keep track of previous, current, and next nodes
    let prevNode = null;
    let currentNode = this.Head;
    // If the list is empty, return
    if (currentNode === null) return;

    let nextNode;
    // Traverse the list and reverse the next pointers of each node
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    // Update the head of the list to the last node
    this.Head = prevNode;
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
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
// Display the original elements of the list
console.log("Original Linked list:");
numList.displayList();
// Reverse the list
numList.reverse_list();
// Display the reversed elements of the list
console.log("Reverse Linked list:");
numList.displayList();
