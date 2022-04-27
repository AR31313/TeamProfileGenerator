// const Engineer = require("./lib/engineer");
// const Intern = require("./lib/intern");
// const Manager = require("./lib/manager");
// const Employee= require ("./lib/employee";)
const inquirer = require('inquirer');
const fs = require("fs");

inquirer
    .prompt(
        {
            type: 'list',
            message: 'What is your Title?',
            name: 'position',
            choices: ['Manager', 'Engineer', 'Intern'],
        }).then((choice) => {
            const employeeRole = choice.position
            if (employeeRole == 'Manager') {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "charName",
                            message: "What is your Name?",
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "Please enter your email: "
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your id#? "
                        },
                        {
                            type: "input",
                            name: "officeNum",
                            message: "What is your Office Number? "
                        }
                    ]).then((choiceTwo) => {
                        const employeeRole = choiceTwo.position
                        if (employeeRole == 'Manager') {

                        }
                    })
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "charName",
                            message: "What is your Name?",
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "Please enter your email: "
                        },
                        {
                            type: "input",
                            name: "id",
                            message: "What is your id#? "
                        }
                    ])

                    .then((data) => {
                        const filename = `./dist/README.md`;

                        fs.writeFile(filename, string, (err) =>
                            err ? console.log(err) : console.log('Success!')
                        );
                    });

    // ask if they have another employee
    // if yes, start at the beginning again
    // if no, Generate the HTML from the saved employees