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
    remove(ele) {
        let index = this.items.indexOf(ele);
        if (index == -1) {
            return "Element not found in the stack";
        }
        this.items.splice(index, 1);
        return;
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
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.displayStack(stack));
n = 1;
console.log("Remove " + n + " from the said stack:");
stack.remove(n);
console.log(stack.displayStack(stack));
n = 7;
console.log("Remove " + n + " from the said stack:");
stack.remove(n);
console.log(stack.displayStack(stack));
n = 4;
console.log("Remove " + n + " from the said stack:");
stack.remove(n);
console.log(stack.displayStack(stack));
