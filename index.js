const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your ReadMe title?",
      name: "title",
    },
    {
      type: "input",
      message: "What will go in your Description section?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What will go in your Usage section?",
      name: "usage",
    },
    {
      type: "input",
      message: "What will go in your Tests section?",
      name: "tests",
    },
    {
      type: "input",
      message: "What will go in your Contributing section?",
      name: "contributing",
    },
    {
      type: "list",
      message: "Which licenses would you like?",
      name: "license",
      choices: [
        "MIT",
        "Apache 2.0",
        "GPL-3",
      ],
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((data) => {
    const readMeInfo = `# ${data.title} ![License](https://img.shields.io/static/v1?label=License&message=${encodeURIComponent(data.license)}&color=green)

## Description
${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Question](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributing
${data.contributing}

## License
${data.license}

## Questions
If you would like reach out my email is [${data.email}](${data.email}) and my GitHub page is https://github.com/${data.gitHub}
`;
    fs.writeFile("test.md", readMeInfo, (err) =>
      err ? console.error(err) : console.log("your ReadMe is ready")
    );
  });
