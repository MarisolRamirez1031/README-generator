// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const useThisBadge = `![badge](https://img.shields.io/badge/License-${license}-blue)`;
  if (license == 'No License') {
    return "No License selected";
  } else {
    return useThisBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description 📖
  ${data.about}

  ## Table of Contents ${renderLicenseBadge(data.license)}

  1. [Installation](##installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License](#license)
  5. [Questions](#contact)

  ${data.contents}


  ## Installation 💾
  ${data.installation}

  ## Usage 🧰 
  ${data.usage}

  ## Credits 🤝
  ${data.credits}

  ## License © ™️
  This project is covered by the [${data.license}](https://choosealicense.com/) license.

  ## Questions ❓
  
  Github: [${data.contact}](https://github.com/${data.contact})

  If you have any additonal questions you may contact me at ${data.email}




`;
}

module.exports = generateMarkdown;
