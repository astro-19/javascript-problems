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

    size() {
        return this.items.length;
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
console.log("Number of elements in the said stack:")
console.log(stack.count());
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(6);
console.log(stack.displayStack(stack));
console.log("Number of elements in the said stack:")
console.log(stack.count());
stack.pop();
stack.pop();
console.log("Remove two elements from the said stack:")
console.log(stack.displayStack(stack));
console.log("Number of elements in the said stack:")
console.log(stack.count());
