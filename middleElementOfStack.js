class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    getMiddleElements() {
        let middleIndex = Math.floor(this.size() / 2);
        let middleElements = [];
        if (this.size() % 2 === 0) {
            middleElements.push(this.items[middleIndex - 1]);
        }
        middleElements.push(this.items[middleIndex]);
        return middleElements;
    }
    displayStack(stack) {
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i < stack.items.length; i++)
            str += stack.items[i] + " ";
        return str.trim();
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add one more element:");
stack.push(4);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add two more elements:");
stack.push(5);
stack.push(6);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
console.log("Add one more element:");
stack.push(7);
console.log(stack.displayStack(stack));
console.log("Middle element(s):");
console.log(stack.getMiddleElements());
