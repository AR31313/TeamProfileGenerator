//  Import the parent class
const Employee = require("./employee");

// Create a `Manager` class that extends the `Employee` class

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //calling super class constructor plus your methods on the constructor function
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getofficeNum() {
        return this.officeNumber;
    }

}
module.exports = Manager