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

    sort_Stack(stack) {
        let tempStack = new Stack();

        while (!stack.isEmpty()) {
            let currentElement = stack.pop();

            while (!tempStack.isEmpty() && tempStack.peek() > currentElement) {
                stack.push(tempStack.pop());
            }

            tempStack.push(currentElement);
        }

        while (!tempStack.isEmpty()) {
            stack.push(tempStack.pop());
        }
        return stack;
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
stack.sort_Stack(stack);
console.log("Sort the elements of the stack in descending order:")
console.log(stack.displayStack(stack));
console.log("Remove one element and insert two elements:")
stack.pop();
stack.push(0);
stack.push(8);
console.log(stack.displayStack(stack));
stack.sort_Stack(stack);
console.log("Sort the elements of the stack in descending order:")
console.log(stack.displayStack(stack));
