// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
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
    //Table of Contents
    
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
        name: 'installationGuide',
      },
    //License Choice
    {
        type: 'list',
        message: `Choose a license to add to your Readme. If you would prefer not to add a licence, please select "skip". `,
        name: 'installationGuide',
      },
    //Contributing
    //Tests
    //Questions including email & git link
    
    
    
    
  ])
  .then(function(response) {
    if(response.confirm === response.password)
      {console.log(colors.green('Success!')); 
    let userdata = `username: ${response.username}
      password: ${response.password}`
    fs.appendFile('log.txt', `${userdata}\n`, (err) =>
        err ? console.error(err) : console.log('Commit logged!'))}
      else {console.log(colors.red('You forgot your password already?!'))}})
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Readme created!') );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
