class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty())
            return "No elements in Stack";
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    removeDuplicates() {
        const uniqueItems = [];
        const seen = new Set();
        for (let i = 0; i < this.items.length; i++) {
            const currentItem = this.items[i];
            if (!seen.has(currentItem)) {
                uniqueItems.push(currentItem);
                seen.add(currentItem);
            }
        }
        this.items = uniqueItems;
    }
    displayStack(stack) {
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i < stack.items.length; i++)
            str += stack.items[i] + " ";
        return str.trim();
    }
}
console.log("Initialize a stack:")
let stack = new Stack();
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(6);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(6);
console.log(stack.displayStack(stack));
stack.removeDuplicates();
console.log("After removing duplicates from the said stack:");
console.log(stack.displayStack(stack));
console.log("Input two more elements on the stack:")
stack.push(1);
stack.push(6);
console.log(stack.displayStack(stack));
stack.removeDuplicates();
console.log("After removing duplicates from the said stack:");
console.log(stack.displayStack(stack));
