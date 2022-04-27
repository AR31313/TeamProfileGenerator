
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.role = role;
    }

    getName() {
        return this.name
    }

    printInfo() {
        console.log(`This Employee's nmae is ${this.name}, & their email is ${this.email}`);
        console.log(`This Employee has an id of ${this.id}, & their role is ${this.role}`);
    }
}
module.exports = Employee;
