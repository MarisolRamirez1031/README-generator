console.log('Hello Node, README!')

const profileDataArgs = process.argv.slice(2, process.argv.length);


// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
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
                message: 'Please describe your project.',
                validate: aboutInput => {
                    if (aboutInput) {
                    return true;
                    } else {
                    console.log('Please enter the project description!');
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
                message: 'What is required to install your project?',
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
                message: 'How is your project being used?',
                validate: usageInput => {
                    if (usageInput) {
                    return true;
                    } else {
                    console.log('Enter project usage information!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Were there any contributing collaborators, third party assets used or credits you would like to give for this Project?',
                default: false
                
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license did you use for this project?',
                choices: ['MIT', 'Apache', 'GPLv3', 'Rails', 'ISC', 'Unlicensed']
                
            },
            {
                type: 'input',
                name: 'contact',
                message: 'What is your GitHub username?',
                validate: contactInput => {
                    if (contactInput) {
                    return true;
                    } else {
                    console.log('Enter your GitHub Username!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                default: 'myname@domain.com',
            },
        ])
        .then(data => {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)
        })
    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app/ prompt
function init() {
    promptUser();
}

// Function call to initialize app
init(); 


const printProfileData = (profileDataArr) => {

    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });
};
printProfileData(profileDataArgs);