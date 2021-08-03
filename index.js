// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
            name: "links",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
