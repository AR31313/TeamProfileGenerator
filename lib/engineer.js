//  Import the parent class
const Employee = require("./employee");

// TODO: Create a `Engineer` class that extends the `Employee` class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //calling super class constructor plus your methods on the constructor function
        super(name, id, email);
        this.github = github;

    }
    getRole() {
        return 'Engineer';
    }
    getGitHub() {
        return this.GitHub;
    }

}
module.exports = Engineer