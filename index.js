// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
    default: 'node-dev',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid GitHub username is required.');
        }
        return true;
    }
  },

  {
    type: 'input',
    message: 'What is the name of your GitHub repo?',
    name: 'repo',
    default: 'README-Generator',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid GitHub repo is required for a badge.');
        }
        return true;
    }
  },

  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid project title is required.');
        }
        return true;
    }
  },

  {
    type: 'input',
    message: 'Write a description of your project.',
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid project description is required.');
        }
        return true;
    }
  },

  {
    type: 'input',
    message: 'Please provide your email to  ',
    name: 'email',
    default: 'dev-email@email.email',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('A valid email is required.');
        }
        return true;
    }
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

  { 
    type: 'input',
    message: '',
    name: 'license'
  },

  { 
    type: 'input',
    message: '',
    name: 'contributing'
  },  

  { 
    type: 'input',
    message: '',
    name: 'tests'
  },  

  { 
    type: 'input',
    message: '',
    name: 'questions'
  }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
