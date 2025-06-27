class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  toArray() {
    return this.items.slice(); // return a copy of the items array
  }
  fromArray(array) {
    this.items = array.slice(); // copy the array to the items array
  }
  displayStack(stack) {
    console.log("Stack elements are:");
    let str = "";
    for (let i = 0; i < stack.items.length; i++) str += stack.items[i] + " ";
    return str.trim();
  }
}
const myArray = [1, 2, 3, 4, 5];
const stack = new Stack();
stack.fromArray(myArray);
console.log(stack.displayStack(stack));
