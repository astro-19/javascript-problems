// Write a JavaScript program that removes the node from the singly linked list at the specified index.
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

  // Method to remove a node at a specified index position
  removeAt(index_pos) {
    // Initialize a reference to the head node
    let nodes = this.Head;
    // If the index position is 0, remove the head node
    if (index_pos === 0) {
      // Check if the head node exists
      if (nodes !== null) {
        // Move the head pointer to the next node
        nodes = nodes.next;
        this.Head = nodes;
      } else throw Error("Index Out of Bound");
      return;
    }
    // Traverse the list until the node before the node to be removed
    while (--index_pos) {
      // Check if the next node exists
      if (nodes.next !== null) nodes = nodes.next;
      else throw Error("Index Out of Bound");
    }
    // Remove the node by skipping it in the list
    nodes.next = nodes.next.next;
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
console.log("Original Linked list:");
numList.displayList();
// Remove a node at index position 0
console.log("Remove the node where index position is 0:");
numList.removeAt(0);
numList.displayList();
// Remove a node at index position 3
console.log("Remove the node where index position is 3:");
numList.removeAt(3);
numList.displayList();
// Remove a node at index position 2
console.log("Remove the node where index position is 2:");
numList.removeAt(2);
numList.displayList();
