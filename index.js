// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Welcome to the README generator! To start off, what is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the instructions for installation?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide some instructions for usage of your application:',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions on how users can contribute to your project.',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:',

    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "GPL", "Apache", "None"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log("Readme Generated! Go to readme.md file to see it!")
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(readmeData => {
   
        writeToFile("./README.md", generateMarkdown(readmeData))
        
    })
}

// Function call to initialize app
init();


