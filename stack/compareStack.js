class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }

  equals(otherStack) {
    if (this.items.length !== otherStack.items.length) return false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] !== otherStack.items[i]) return false;
    }

    return true;
  }

  displayStack(stack) {
    console.log("Stack elements are:");
    let str = "";
    for (let i = 0; i < stack.items.length; i++) str += stack.items[i] + " ";
    return str.trim();
  }
}
const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log("Stack1:");
console.log(stack1.displayStack(stack1));
const stack2 = new Stack();
stack2.push(2);
stack2.push(3);
console.log("Stack2:");
console.log(stack2.displayStack(stack2));
const stack3 = new Stack();
stack3.push(1);
stack3.push(2);
stack3.push(3);
console.log("Stack3:");
console.log(stack3.displayStack(stack3));
console.log("Is stack2 is equal to stack1!");
console.log(stack2.equals(stack1));
console.log("Is stack3 is equal to stack1!");
console.log(stack3.equals(stack1));
