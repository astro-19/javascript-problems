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
    getNthFromTop(n) {
        if (this.items.length < n) {
            return "Index out of range";
        }
        return this.items[this.items.length - n];
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
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.push(600);
stack.push(700);
console.log(stack.displayStack(stack));
n = 2;
console.log("nth element from the top of the stack where n = " + n);
console.log(stack.getNthFromTop(n));
n = 5;
console.log("nth element from the top of the stack where n = " + n);
console.log(stack.getNthFromTop(n));
n = 7;
console.log("nth element from the top of the stack where n = " + n);
console.log(stack.getNthFromTop(n));
