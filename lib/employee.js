
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
        console.log(`This Employee's name is ${this.name}, & they can be contacted at ${this.email}.`);
        console.log(`Their id # is ${this.id}, & their role at this company is a ${this.role}.`);
    }
}
module.exports = Employee;
