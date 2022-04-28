const Employee = require("../lib/employee")

test("grab the name of employee", function () {
    let carl = new Employee("Carl Weezer", 19, "carl@gmail.com")
    expect(carl.name).toBe("Carl Weezer")
})

test("grab the ID of employee", function () {
    let carl = new Employee("Carl Weezer", 19, "carl@gmail.com")
    console.table(carl)
    expect(carl.id).toBe(19)
})
test("grab the email of employee", function () {
    let carl = new Employee("Carl Weezer", 19, "carl@gmail.com")
    expect(carl.email).toBe("carl@gmail.com")
})

test("getName return", function () {
    let carl = new Employee("Carl Weezer", 19, "carl@gmail.com")
    console.log(carl.printInfo())
    expect(carl.getName() == "Carl Weezer")
})