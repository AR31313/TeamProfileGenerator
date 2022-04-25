const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: "
    },
    {
      type: "input",
      name: "sitelink",
      message: "Please post the link the Deployed Application ",
    },
    {
      type: "input",
      name: "behavior",
      message: "What is this Expected Behavior of the Application"
    },
    {
      type: "input",
      name: "install",
      message: "What is the installation for the Application?"
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "GNU",
        "MIT",
        "Mozilla",
        "Open"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
    },
    {
      type: "input",
      name: "bugs",
      message: "Are there any known bugs?"
    },
    {
      type: "input",
      name: "repolink",
      message: "Please post the Application's GitHub repo link"
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    }
  ])

  .then((data) => {
    const filename = `./output/README.md`;
    var badge = ''
    if (data.license == "Apache") {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (data.license == "GNU") {
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (data.license == "MIT") {
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (data.license == "Mozilla") {
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (data.license == "Open") {
      badge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
    }

    var string = `# ${data.projectTitle}
  ${badge}

  ## Table of Contents
    
  1. [Description](#Description)
    
  2. [Installation](#install)
    
  3. [Usage](#Usage)

  4. [BUGS](#Bugs)
    
  5. [License](#License)
    
  6. [Contributers](#Contributors)
  
  7. [GitHub Info](#github)
  
    
  ## Description
    
  ### ${data.description}
    
  ## Install
    
  ### ${data.install}
    
  ## Usage

  ### ${data.behavior}
    
  ## License
  ${badge}

  ## Bugs

  ### ${data.bugs}

  ## Contributors
  ### ${data.contributing}
  ### ${data.email}

  ## github
  ### ${data.repolink}
  ### ${data.username}
    `

    fs.writeFile(filename, string, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });