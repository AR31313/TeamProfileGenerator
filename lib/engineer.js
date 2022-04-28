//  Import the parent class
const Employee = require("./employee");

const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create a `Engineer` class that extends the `Employee` class

class Engineer extends Employee {
    constructor(github) {
        //calling super class constructor plus your methods on the constructor function
        super('Barl', '4B', 'Barl@earl.com');
        this.github = GitHub;
    }
    getRole() {
        console.log(this.role); //overridden to return 'Engineer'??
    }
    getGitHub() {
        console.log(this.GitHub);
    }

}
const engineer = new Engineer('githubUSER');

console.log('---ENGINEER---');
engineer.printInfo();
engineer.getRole();