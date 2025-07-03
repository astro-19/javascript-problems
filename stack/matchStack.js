class Stack {
  constructor() {
    this.items = [];
  }

  // push element to the stack
  push(element) {
    this.items.push(element);
  }

  // pop element from the stack
  pop() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // get the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // get the size of the stack
  size() {
    return this.items.length;
  }

  difference_of_two(stk) {
    let diff_Stack = new Stack();
    let thisArray = this.toArray();
    let otherArray = stk.toArray();
    for (let i = 0; i < thisArray.length; i++) {
      if (!otherArray.includes(thisArray[i])) {
        diff_Stack.push(thisArray[i]);
      }
    }
    return diff_Stack;
  }

  toArray() {
    return this.items.slice();
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
console.log("Stack3:");
console.log(stack3.displayStack(stack3));
console.log(
  "Find elements that are in the first stack but not in the second stack:"
);
let result = stack1.difference_of_two(stack2);
console.log("Difference of stack1 and stack2!");
console.log(result.displayStack(result));
result = stack1.difference_of_two(stack3);
console.log("Difference of stack1 and stack3!");
console.log(result.displayStack(result));
result = stack2.difference_of_two(stack3);
console.log("Difference of stack2 and stack3!");
console.log(result.displayStack(result));
result = stack3.difference_of_two(stack2);
console.log("Difference of stack3 and stack2!");
console.log(result.displayStack(result));
