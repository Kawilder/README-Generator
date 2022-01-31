// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },

  {
    type: 'input',
    message: 'What is the name of the GitHub repo?',
    name: 'repo',
  },

  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },

  {
    type: 'input',
    message: 'Write a description of your project.',
    name: 'description',
  },

  {
    type: 'input',
    message: 'Please provide your email',
    name: 'email',
  },  

  // Table of contents stuff
  {
    type: 'input',
    message: 'Please describe the steps required to install your project.',
    name: 'installation'
  },

  {
    type: 'input',
    message: 'Provide instructions and examples on how to use your project.',
    name: 'usage'
  },
];

// TODO: Create a function to write README file
inquirer
  .prompt(questions)

function appendFile(fileName, data) {
    fs.appendFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}
