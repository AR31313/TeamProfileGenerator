const fs = require('fs');
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const engineerContainer = require("./src/engineerCard");
const internContainer = require("./src/internCard");
const managerContainer = require("./src/internCard");


const inquirer = require('inquirer');


let managerArray = [];
let engineerArray = [];
let internArray = [];

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
            managerArray.push(newManager);
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
            engineerArray.push(newEngineer);
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
            internArray.push(newInterns);
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
                generateHTML(managerArray, engineerArray, internArray);
            }
        });
}
function generateHTML(managerArray, engineerArray, internArray) {
    //this function takes the results & writes it to output.html file, which is saved on the /dist directory.
    var employeeArray = [managerArray, engineerArray, internArray];
    for (var i = 0; i < employeeArray.length; i++) {
        const filenames = `./dist/output.html`;

        function generateManagerCard(managerArray) {
            const managerTemplateLits = managerArray
                .map((element) => {
                    return `
                    <div class="w3-quarter">
                    <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
                    <h3>${element.charname}</h3>
                    <h4>${element.getRole()}</h4>
                    <h4>ID: ${element.id}</h4>
                    <h4>Email:
                    <a href="mailto:${element.email}" target="_blank">${element.email}</a></h4>
                    <h4>Office Number: ${element.officeNumber}</h4>
                    </div>`;
                })
                .join("");

            return managerTemplateLits;
        }
        function generateInternCard(internArray) {
            const internInfo = internArray
                .map((element) => {
                    return `
                    <div class="w3-quarter">
                    <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
                    <h3>Name: ${element.charname}</h3>
                    <h4>${element.getRole()}</h4>
                    <h4>ID: ${element.id}</h4>
                    <h4>Email:
                    <a href="mailto:${element.email}" target="_blank">${element.email}</a></h4>
                    <h4>School: ${element.school}</h4>
                    </div>`;
                })
                .join("");

            return internInfo;
        }
        function generateEngineerCard(engineerArray) {
            const engineerInfo = engineerArray
                .map((element) => {
                    return `
                    <div class="w3-quarter">
                    <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
                    <h3>Name: ${element.charname}</h3>
                    <h4>${element.getRole()}</h4>
                    <h4>ID: ${element.id}</h4>
                    <h4>Email:
                    <a href="mailto:${element.email}" target="_blank">${element.email}</a></h4>
                    <h4>Github: ${element.github}</h4>
                    </div>`;
                })
                .join("");

            return engineerInfo;
        }
        var string = `<!DOCTYPE html>
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
    ${generateManagerCard(managerArray)}
    ${generateEngineerCard(engineerArray)}
    ${generateInternCard(internArray)}
    </div>
    </body>
    </html>`;
        fs.writeFile(filenames, string, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    };
}


// call the initPromptLoop function to start the Prompt Questions
initPromptLoop();

