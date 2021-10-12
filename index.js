console.log('Hello Node, README!')

const profileDataArgs = process.argv.slice(2, process.argv.length);


// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); 

const printProfileData = (profileDataArr) => {
    // This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('============')

    // Is the same as this..
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });
};
printProfileData(profileDataArgs);