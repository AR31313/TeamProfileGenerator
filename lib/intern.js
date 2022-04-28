//  Import the parent class
const Employee = require("./employee");

const inquirer = require('inquirer');
const fs = require("fs");
// Create a `Intern` class that extends the `Employee` class

class Intern extends Employee {
    constructor(school) {
        //calling super class constructor plus your methods on the constructor function
        super('Tarl', '4T', 'Tarl@earl.com');
        this.github = GitHub;
    }
    getRole() {
        console.log(this.role); //overridden to return 'Intern'??
    }
    getSchool() {
        console.log(this.school);
    }


}
const intern = new Intern('Office#102');

console.log('---INTERN---');
intern.printInfo();
intern.getRole();
