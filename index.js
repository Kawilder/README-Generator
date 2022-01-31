const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    message: 'Please provide your email.',
    name: 'email',
  },  

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
    type: 'list',
    message: 'What license does your project use?',
    name: 'license',
    choices: ['none'],
  },

  {
    type: 'input',
    message: 'Who has contributed?',
    name: 'contributions',
  },

  {
    type: 'input',
    message: 'How is this project tested?',
    name: 'tests',
  },

];

function init() {
  inquirer.prompt(questions)
      .then(function(answer) {
          console.log(answer);
      var fileContent = generateMarkdown(answer);
      writeToFile(fileContent)
      });
};

const writeToFile = fileContent => {
  fs.writeFile('./generatedREADME.md', fileContent, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("README was successfully created !!!");
  });
};

init();

module.exports = questions;