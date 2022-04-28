const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const Engineer = require("./src/engineerCard");
const Intern = require("./src/employeeCard");
const Manager = require("./src/internCard");
const Employee = require("./src/managerCard");

const inquirer = require('inquirer');
var employeeArray = [];

// let managers = [];
// let engineers = [];
// let interns = [];

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
                } else if (employeeRole === "Engineer") {
                    initEngineerQuestions();
                } else if (employeeRole === "Intern") {
                    initInternQuestions();
                }
            })
};

function initManagerQuestions() {
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
        ])
        .then(function (response) {
            // creates a new Manager Object with responses, which adds the response to the employeeArray.
            const newManager = new manager(
                response.charName,
                response.id,
                response.email,
                response.officeNum,
            );
            employeeArray.push(newManager);
            addEmployee();
        });
}

function initEngineerQuestions() {
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
                name: "gitHub",
                message: "What is your GitHub Username? "
            }
        ]).then(function (response) {
            // creates a new Manager Object with responses, which adds the response to the employeeArray.
            const newEngineer = new engineer(
                response.charName,
                response.id,
                response.email,
                response.gitHub,
            );
            employeeArray.push(newEngineer);
            addEmployee();
        });

};

function initInternQuestions() {
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
                name: "school",
                message: "Name of your school? "
            }
        ]).then(function (response) {
            // creates a new Manager Object with responses, which adds the response to the employeeArray.
            const newInterns = new intern(
                response.charName,
                response.id,
                response.email,
                response.school,
            );
            employeeArray.push(newInterns);
            addEmployee();
        });

};

// ask if they have another employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add another Employee?',
                name: 'secondEmployee',
                choices: ['Yes', 'No'],
            },
        ]).then(function (choiceTwo) {
            // if yes, start at the beginning again
            if (choiceTwo.secondEmployee === 'Yes') {
                initPromptLoop();
                // if no, Generate the HTML from the saved employees
            } else {
                generateHTML(employeeArray);
            }
        });
}
function generateHTML(employeeArray) {
    const Engineer = require("./src/engineerCard");
    const Intern = require("./src/employeeCard");
    const Manager = require("./src/internCard");
    const Employee = require("./src/managerCard");
}

// call the initPromptLoop function to start the Prompt Questions
initPromptLoop();
