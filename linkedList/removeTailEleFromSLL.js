// Write a JavaScript program that removes the tail element from a Singly Linked list.
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
    // Start traversal from the head node
    let nodes = this.Head;
    // If index position is 0, remove the head node
    if (index_pos === 0) {
      if (nodes !== null) {
        nodes = nodes.next;
        this.Head = nodes;
      } else {
        throw Error("Index Out of Bound");
      }
      return;
    }
    // Traverse the list until the previous node of the node to be removed
    while (--index_pos) {
      if (nodes.next !== null) {
        nodes = nodes.next;
      } else {
        throw Error("Index Out of Bound");
      }
    }
    // Remove the node by skipping its reference in the list
    nodes.next = nodes.next.next;
  }

  // Method to get the size of the list
  size() {
    let current = this.Head;
    let count = 0;
    // Traverse the list and count the number of nodes
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Method to delete the last item from the list
  deleteTail() {
    // Call removeAt method to remove the node at the last index position
    this.removeAt(this.size() - 1);
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
// Remove the last element from the list
console.log("Remove the tail from the said Singly Linked list:");
numList.deleteTail();
numList.displayList();
// Again remove the last element from the list
console.log("Again remove the tail from the said Singly Linked list:");
numList.deleteTail();
numList.displayList();
