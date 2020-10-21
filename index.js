// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Promisify writeFile function
const writeFileAsync = util.promisify(fs.writeFile);
// If you google github badges, you wil be able to insert the license choice into the URL. So if you have that list of licneses...
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "email",
      message: "Enter email address.",
    },
    {
      type: "input",
      name: "name",
      message: "What is the README title?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a project description.",
    },
    {
      type: "input",
      name: "installation_instructions",
      message: "Enter installation instructions.",
    },
    {
      type: "input",
      name: "usage_information",
      message: "Enter usage information.",
    },
    {
      type: "input",
      name: "contributing_guidelines",
      message: "Enter contributing guidelines.",
    },
    {
      type: "input",
      name: "test_instructions",
      message: "Enter test instructions.",
    },
    {
      type: "list",
      message: "What is your preferred license?",
      name: "contact",
      choices: ["MIT", "GNU GPLv3", "GNU GPLv2"],
    },
  ]);
}

//Generate the HTML with template literals
function generateHTML(answers) {
  return ` # ${answers.name}
  ## Table of Contents
  * [Installation](#Installation)
  * [Description](#Description)
  * [Usage](#Usage)
  * [License](#License)
  ## Description
  ${answers.description}
  ![Web page](assets/img/portfolio-index.png)
  ![Web page](assets/img/portfolio-portfolio.png)
  ## Installation
  ${answers.installation_instructions}
  ## Usage Information
  ${answers.usage_information}
  ## License
  Copyright (c) Microsoft Corporation. All rights reserved.
  
  Licensed under the MIT license.
  ## Contributing Guidelines
  ${answers.contributing_guidelines}
  ## Tests
  ${answers.test_instructions}
  ## Questions
  If you have any further questions, please contact me at ${answers.email}
`;
}

// Call prompt user to kick off our inquirer prompts
// Grab the answers, place them in a variable function call
function init() {
  promptUser()
    .then(function (answers) {
      const html = generateHTML(answers);

      // Write contents of html to index.html
      return writeFileAsync("README.md", html);
    })
    .then(function () {
      console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
      console.log(err);
    });
}

init();
