//  Import the parent class
const Employee = require("./employee");

// Create a `Intern` class that extends the `Employee` class

class Intern extends Employee {
    constructor(name, id, email, school) {
        //calling super class constructor plus your methods on the constructor function
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }


}
module.exports = Intern
