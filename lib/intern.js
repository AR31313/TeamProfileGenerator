//  Import the parent class
const Employee = require("./lib/employee");

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

inquirer
    .prompt([
        {
            type: "input",
            name: "schoolName",
            message: "What School do you Attend?",
        }
    ])

    .then((data) => {
        const filename = `./dist/README.md`;

        fs.writeFile(filename, string, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });