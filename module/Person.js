//This file contains the Person class.
// Defining and exporting the Person class
export class Person {
    constructor(name, age) {
        this.name = name; // Assigns name
        this.age = age; // Assigns age
    }

    introduce() {
        // Method to introduce the person
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}
