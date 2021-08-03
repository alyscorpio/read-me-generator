// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const writeFile = (answers) =>
    '# ${answers.title}
![Github license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
## Description 
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test)
- [License](#license)
- [Contact](#contact)

## Installation
${answers.installation}

## Usage
[Here](${answers.usage}) are the links where you can see the application.

## Contributing
${answers.contributing}

## Tests 
${answers.test}

## License
This application is covered under the ${answers.license} license.

## Contact
For more information about my application, visit my [Github](https://github.com/${answers.github}/).
For additional questions, email me at ${answers.email}.


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your app. What motivated you to create it?",
        },
        {
            type: "input",
            name: "installation",
            message: "How can users install your app?",
        },
        {
            type: "input",
            name: "usage",
            message: "At what links can users see the app?",
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed in the creation of your project?",
        },
        {
            type: "input",
            name: "test",
            message: "How did you test your app?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license(s) do you want to use?",
            choices: ["MIT", "GNU GPLv3", "ISC"],
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub user name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ])
    // TODO: Create a function to write README file
    .then((answers) => {
        const readMe = writeFile(answers);

        fs.writeFile("README.md", readMe, (err) =>
        err ? console.log(err) : console.log("Great! Your new README file is all set!")
        );
    });

