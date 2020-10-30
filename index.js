// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
var generateMarkdown = require('./utils/generateMarkdown');
var promptUser = require('./utils/promptUser');

// Promisify writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// Call prompt user to kick off our inquirer prompts
// Grab the answers, place them in a variable function call
function init() {
  promptUser()
    .then(function (answers) {
      if (answers.license === "MIT"){
          var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      }
      if (answers.license === "GNU GPLv3"){
        var license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      }
      if (answers.license === "GNU GPLv2") {
      var license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      }
      const html = generateMarkdown(answers, license);

      // Write contents of html to index.html
      return writeFileAsync("README.md", html);
    })
    .then(function () {
      console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
      console.log(err);
    });
}

init();
