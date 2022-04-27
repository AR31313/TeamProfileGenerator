//  Import the parent class
const Employee = require("./employee");

const inquirer = require('inquirer');
const fs = require("fs");
// Create a `Manager` class that extends the `Employee` class

class Manager extends Employee {
    constructor(officeNumber) {
        //calling super class constructor plus your methods on the constructor function
        super('Earl', '4A', 'earl@earl.com');
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log(this.role); //overridden to return 'Manager'??
    }

}

const manager = new Manager('Office#102');

console.log('---MANAGER---');
manager.printInfo();
manager.getRole();
