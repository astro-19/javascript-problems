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
    swap() {
        if (this.items.length < 2) {
            return "There are no sufficient elements.";
        }
        const topElement = this.items.pop();
        const secondElement = this.items.pop();
        this.items.push(topElement);
        this.items.push(secondElement);
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
console.log("Swap top two elements:");
stack.swap();
console.log(stack.displayStack(stack));
console.log("Input two more elements on the stack:")
stack.push(8);
stack.push(9);
console.log(stack.displayStack(stack));
console.log("Swap top two elements:");
stack.swap();
console.log(stack.displayStack(stack));
