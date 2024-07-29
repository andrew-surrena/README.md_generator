// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    
    //Title
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
    //Description
    {
        type: 'input',
        message: 'Please describe your project in a few sentences.',
        name: 'description',
      },
    
    //Installation Instructions
    {
        type: 'input',
        message: 'Please provide instructions for installing your application',
        name: 'installationGuide',
      },
    //Usage Instructions
    {
        type: 'input',
        message: 'Please provide instructions for using your application',
        name: 'usage',
      },
    //License Choice
    {
        type: 'list',
        message: `Choose a license to add to your Readme. If you would prefer not to add a licence, please select "skip". `,
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Mozilla Public License', 'The Unlicense', 'skip']
      },
    //Contributing
    {
      type: 'input',
      message: 'Please add a list of contributers.',
      name: 'contrubutors',
    },
    //Tests
    {
      type: 'input',
      message: `Please describe any tests for your application. To skip, press ENTER.`,
      name: 'tests',
    },
    //Questions including email & git link
    {
      type: 'input',
      message: `Please add a valid email address.`,
      name: 'email',
  }
  ,
    {
      type: 'input',
      message: `Please add a link to your github.`,
      name: 'github',
    },
    
  
];

// TODO: Create a function to write README file

function writeToFile(fileName, userData) {
    fs.writeFile(fileName, userData, (err) =>
err ? console.error(err) : console.log('Readme created!') );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(function(response) {
    const fileName = `${response.title.toLowerCase().split(' ').join('')}_README.md`;
    function generateReadme(response) {
      if (response.license === 'skip') {
        response.license = 'No License'
      } 
      if (response.tests === '') {
        response.tests = 'No tests have been run at this time'
      }
    }
    const readmeContent = generateMarkdown(response);
  writeToFile(`./generated_files/README.md`, readmeContent); 
  console.log('Thank you for submitting responses, generating README.md') ;
    })
}
// Function call to initialize app
init();
