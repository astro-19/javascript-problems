class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  displayStack(stack) {
    let tempStack = new Stack();

    // Copy all elements from the original stack to a temporary stack
    while (!stack.isEmpty()) {
      tempStack.push(stack.pop());
    }
    let str = "";
    while (!tempStack.isEmpty()) {
      let element = tempStack.pop();
      stack.push(element);
      str += element + " ";
    }
    console.log(str);
  }
}

console.log("Initialize a stack using a linked list:");
let stack = new Stack();
console.log("Is the stack empty?");
console.log(stack.isEmpty());
console.log("Input some elements on the stack:");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.displayStack(stack);
console.log("Top of the element of the stack:");
console.log(stack.peek());
console.log("Size of the stack:");
console.log(stack.getSize());
console.log("Remove one element from the stack:");
stack.pop();
stack.displayStack(stack);
console.log("Top of the element of the stack:");
console.log(stack.peek());
console.log("Is the stack empty?");
console.log(stack.isEmpty());
console.log("Size of the stack:");
console.log(stack.getSize());
