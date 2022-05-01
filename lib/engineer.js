//  Import the parent class
const Employee = require("./employee");
const engineerCard = require('../src/engineerCard');

// Create a `Engineer` class that extends the `Employee` class
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
        const username = this.github;
        return username;
    }
    render() {
        return engineerCard()
    }

}
module.exports = Engineer