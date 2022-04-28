// const Engineer = require("./lib/engineer");
// const Intern = require("./lib/intern");
// const Manager = require("./lib/manager");
// const Employee = require("./lib/employee");
const inquirer = require('inquirer');
const fs = require("fs");
var employeeArray = [];

let managers = [];
let engineers = [];
let interns = [];

function initPromptLoop() {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'What is your Title?',
                name: 'position',
                choices: ['Manager', 'Engineer', 'Intern'],
            }).then(choice => {
                const employeeRole = choice.position;
                if (employeeRole === "Manager") {
                    initManagerQuestions();
                }
            })
}

initManagerQuestions() {
    // ask manager questions, then push data to managers array

};

initEngineerQuestions() {
    // ask manager questions, then push data to engineers array

};

initInternQuestions() {
    // ask manager questions, then push data to interns array

};

// function prompt() {
//     inquirer
//         .prompt(
//             {
//                 type: 'list',
//                 message: 'What is your Title?',
//                 name: 'position',
//                 choices: ['Manager', 'Engineer', 'Intern'],
//             }).then((choice) => {
//                 const employeeRole = choice.position
//                 if (employeeRole == 'Manager') {
//                     initManagerQuestions();
//                     inquirer
//                         .prompt([
//                             {
//                                 type: "input",
//                                 name: "charName",
//                                 message: "What is your Name?",
//                             },
//                             {
//                                 type: "input",
//                                 name: "email",
//                                 message: "Please enter your email: "
//                             },
//                             {
//                                 type: "input",
//                                 name: "id",
//                                 message: "What is your id#? "
//                             },
//                             {
//                                 type: "input",
//                                 name: "officeNum",
//                                 message: "What is your Office Number? "
//                             }
//                         ])

//                 } else if (employeeRole == 'Engineer') {
//                     inquirer
//                         .prompt([
//                             {
//                                 type: "input",
//                                 name: "charName",
//                                 message: "What is your Name?",
//                             },
//                             {
//                                 type: "input",
//                                 name: "email",
//                                 message: "Please enter your email: "
//                             },
//                             {
//                                 type: "input",
//                                 name: "id",
//                                 message: "What is your id#? "
//                             },
//                             {
//                                 type: "input",
//                                 name: "gitHub",
//                                 message: "What is your GitHub Username? "
//                             }
//                         ])
//                 } else if (employeeRole == 'Intern') {
//                     inquirer
//                         .prompt([
//                             {
//                                 type: "input",
//                                 name: "charName",
//                                 message: "What is your Name?",
//                             },
//                             {
//                                 type: "input",
//                                 name: "email",
//                                 message: "Please enter your email: "
//                             },
//                             {
//                                 type: "input",
//                                 name: "id",
//                                 message: "What is your id#? "
//                             },
//                             {
//                                 type: "input",
//                                 name: "school",
//                                 message: "Name of your school? "
//                             }
//                         ]) // ask if they have another employee
//                     inquirer
//                         .prompt([
//                             {
//                                 type: 'list',
//                                 message: 'Do you want to add another Employee?',
//                                 name: 'addEmployee',
//                                 choices: ['Yes', 'No'],
//                             }
//                         ])
//                         .then((choiceTwo) => {
//                             employeeRole = choiceTwo.addEmployee
//                             if (employeeRole == 'Yes') {
//                                 prompt()
//                             } else {
//                                 console.log('what else?')
//                             }
//                         })

//                         .then((data) => {
//                             const filename = `./dist/README.md`;

//                             fs.writeFile(filename, string, (err) =>
//                                 err ? console.log(err) : console.log('Success!')
//                             );
//                         });
//                 }

                    // ask if they have another employee

                    // .then((choiceTwo) => {
                    //     const employeeRole = choiceTwo.position
                    //     if (employeeRole == 'Manager') {
                    // if yes, start at the beginning again
                    // if no, Generate the HTML from the saved employees