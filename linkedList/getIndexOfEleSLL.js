// Write a JavaScript program to get the index of an element in a Singly Linked list.
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

  // Method to find the index of a given element in the list
  index_of(el) {
    let index = 0;
    let node = this.Head;
    // Traverse the list until the end or until the element is found
    while (node) {
      // If the data of the current node matches the element, return the index
      if (node.data === el) {
        return index;
      }
      // Move to the next node and increment the index
      node = node.next;
      index++;
    }
    // If the element is not found, return -1
    return -1;
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
numList.add(new Node(16));
// Display the elements of the list
console.log("Singly Linked list:");
numList.displayList();
// Find the index of various elements in the list
result = numList.index_of(12);
console.log("Index of 12 in the said linked list: " + result);
result = numList.index_of(13);
console.log("Index of 13 in the said linked list: " + result);
result = numList.index_of(14);
console.log("Index of 14 in the said linked list: " + result);
result = numList.index_of(16);
console.log("Index of 16 in the said linked list: " + result);
