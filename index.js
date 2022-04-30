const fs = require('fs');
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const engineerContainer = require("./src/engineerCard");
const internContainer = require("./src/internCard");
const managerContainer = require("./src/internCard");


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
            // creates a new Engineer Object with responses, which adds the response to the employeeArray.
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
                name: 'secondEmployee',
                message: 'Add another Employee?',
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
    //this function takes the results & writes it to output.html file, which is saved on the /dist directory.
    employeeArray.forEach((element) => {
        const filename = `./dist/output.html`;
        const getRole = element.getRole();
        let empCard = '';
        if (getRole === 'Manager') {
            empCard = managerContainer(element);
        } else if (getRole === 'Engineer') {
            empCard = engineerContainer(element);
        } else if (getRole === 'Intern') {
            empCard = internContainer(element);
        } else {
            console.error(error);
        } var string = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Team </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Karma"
        />
        <style>
          body,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Karma", sans-serif;
          }
          .w3-bar-block .w3-bar-item {
            padding: 20px;
          }
        </style>
    </head>
    <body>
    <!-- Top menu -->
    <div class="w3-top">
        <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
          <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
          <div class="w3-right w3-padding-16"></div>
          <div class="w3-center w3-padding-16">TEAM MEMBERS</div>
        </div>
      </div>
    <!-- !PAGE CONTENT! -->
    <div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">
    
        <!-- EMPLOYEE container Grid-->
        <div class="w3-row-padding w3-padding-16 w3-center" id="container">
        <div class="w3-quarter"> 
        ${empCard}
        <!-- Third party JS files linked here -->
        <script src="script.js"></script>
        
    </body>
    </html>`
    });
    fs.writeFile(filename, string, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}


// call the initPromptLoop function to start the Prompt Questions
initPromptLoop();
