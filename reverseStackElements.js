class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    peek() {
        if (this.items.length == 0)
            return "No elements in Stack";
        return this.items[this.items.length - 1];
    }

    displayStack(stack) {
        console.log("Stack elements are:");
        let str = "";
        for (let i = 0; i < stack.items.length; i++)
            str += stack.items[i] + " ";
        return str.trim();
    }

    reverse_stack(stack) {
        let tempStack = new Stack();

        while (!stack.isEmpty()) {
            tempStack.push(stack.pop());
        }
        return tempStack;
    }
}
console.log("Initialize a stack:")
let stack = new Stack();
console.log("Input some elements on the stack:")
stack.push(1);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(5);
console.log(stack.displayStack(stack));
let reversedStack = stack.reverse_stack(stack);
console.log("The elements of the stack in reverse order:")
console.log(stack.displayStack(reversedStack));
