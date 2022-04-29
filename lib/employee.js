
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


    getId() {
        return this.id;
    }


    getEmail() {
        return this.email;
    }


    getRole() {
        return 'Employee';
    }

    printInfo() {
        console.log(`This Employee's name is ${this.name}, & their email is ${this.email}`);
        console.log(`This Employee has an id of ${this.id}, & their role is ${this.role}`);
    }
}
module.exports = Employee;
