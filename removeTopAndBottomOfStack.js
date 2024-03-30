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
    get_Top() {
        return this.items[this.items.length - 1];
    }
    get_Bottom() {
        return this.items[0];
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
stack.push(7);
console.log(stack.displayStack(stack));
console.log("Top element of the stack is:", stack.get_Top());
console.log("Bottom element of the stack is:", stack.get_Bottom());
