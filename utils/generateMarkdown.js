// function to generate markdown for README
function generateMarkdown(answers, license) {
  return `# ${answers.name}
  ${license}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribute](#Contribute)
  * [Tests](#Tests)
  * [Questions](#Questions)
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
  
  Licensed under the ${answers.license} license.
  ## Contributing Guidelines
  ${answers.contributing_guidelines}
  ## Tests
  ${answers.test_instructions}
  ## Questions
  If you have any further questions, please contact me at ${answers.email}.
  My GitHub profile is [Github Repo](https://github.com/${answers.gitHub}).
`;
}

module.exports = generateMarkdown;
