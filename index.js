console.log('Hello Node, README!')

const profileDataArgs = process.argv.slice(2, process.argv.length);


// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown');

const generate = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer
    .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your Project?',
                validate: titleInput => {
                    if (titleInput) {
                    return true;
                    } else {
                    console.log('Please enter your project Title!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'about',
                message: 'What is your Project about?',
                validate: aboutInput => {
                    if (aboutInput) {
                    return true;
                    } else {
                    console.log('Please enter your project description!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contents',
                message: 'Will there be a Table of Contents?',
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?',
                validate: installationInput => {
                    if (installationInput) {
                    return true;
                    } else {
                    console.log('You need to enter installation directions for your project!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are the usage instructions for your Project?',
                validate: usageInput => {
                    if (usageInput) {
                    return true;
                    } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                    }
                }
                
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Were there any contributing collaborators or third party assets used for this Project?',
                default: false
                
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use for this Project?',
                choices: ['MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'Rails', 'Unlicensed']
                
            },
            {
           }
        ])
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

// TODO: Create a function to initialize app/ prompt
function init() {
    promptQuestions();
}

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