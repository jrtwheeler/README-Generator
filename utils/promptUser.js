const inquirer = require("inquirer");
const fs = require("fs");

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
        type: "input",
        name: "gitHub",
        message: "Enter GitHub username.",
      },
      {
        type: "list",
        message: "What is your preferred license?",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "GNU GPLv2"],
      },
    ]);
  }

  module.exports = promptUser;