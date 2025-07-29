// Write a JavaScript program to check if an element is present in the Singly Linked list.

class Node {
  // Constructor function for creating a new node with given data
  constructor(data) {
    this.data = data; // Assign the given data to the node
    this.next = null; // Initialize the pointer to the next node as null
  }
}
class SinglyLinkedList {
  // Constructor function for creating a new singly linked list with optional Head node
  constructor(Head = null) {
    this.Head = Head; // Initialize the Head node of the list
  }

  add(newNode) {
    let node = this.Head; // Start from the Head node
    if (node == null) {
      // If the list is empty
      this.Head = newNode; // Set the new node as the Head
      return;
    }
    while (node.next) {
      // Traverse the list until reaching the last node
      node = node.next; // Move to the next node
    }
    node.next = newNode; // Set the next pointer of the last node to the new node
  }

  is_present(val) {
    let current = this.Head; // Start from the Head node
    while (current) {
      // Iterate through the list
      if (current.data === val) {
        // If the value is found
        return true; // Return true indicating presence of value
      }
      current = current.next; // Move to the next node
    }
    return false; // Return false indicating absence of value
  }

  displayList() {
    let node = this.Head; // Start from the Head node
    var str = ""; // Initialize an empty string to store the list elements
    while (node) {
      // Iterate through the list
      str += node.data + "->"; // Append the data of the current node to the string
      node = node.next; // Move to the next node
    }
    str += "NULL"; // Append "NULL" to indicate the end of the list
    console.log(str); // Print the string representing the list
  }
}
let numList = new SinglyLinkedList(); // Create a new instance of the SinglyLinkedList class
numList.add(new Node(12)); // Add nodes to the list
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.add(new Node(14));
numList.add(new Node(16));
console.log("Singly Linked list:"); // Print the original list
numList.displayList();
result = numList.is_present(12); // Check if value 12 is present in the list
console.log("Is 12 present in the said link list: " + result); // Log the result
result = numList.is_present(14); // Check if value 14 is present in the list
console.log("Is 14 present in the said link list: " + result); // Log the result
result = numList.is_present(17); // Check if value 17 is present in the list
console.log("Is 17 present in the said link list: " + result); // Log the result
result = numList.is_present(19); // Check if value 19 is present in the list
console.log("Is 19 present in the said link list: " + result); // Log the result
