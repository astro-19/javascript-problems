// Write a JavaScript program to convert a Singly Linked list into a string.
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

  // Method to convert the linked list to a string
  to_string() {
    // Initialize an empty string to store the elements of the list
    let current = this.Head;
    let str = "";
    // Traverse the list and concatenate each element to the string
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    return str;
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
// Convert the linked list to a string
console.log("Converts the said Singly Linked Lists into a string:");
result = numList.to_string();
console.log(result);

// Create a new instance of the SinglyLinkedList class
let numList1 = new SinglyLinkedList();
// Display the elements of the empty list
console.log("New Singly Linked list:");
numList1.displayList();
// Convert the empty linked list to a string
console.log("Converts the said Singly Linked Lists into a string:");
result = numList1.to_string();
console.log(result);
