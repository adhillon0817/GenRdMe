// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //![name of the license(data.licsence)](link to get badge just google for generic link (data.llisnec e))
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //[license name](link with more info about licsnece) if then statement based on licence choice so link is correct
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if else statement
}

//breaking it down to simplify generate title. 



//data.title
//data.description
//data.authorName


// TODO: Create a function to generate markdown for README


//For the titles are we doing the same as index.js? 
//Difference between lines 14 ans 29?
//I am not getting anything returned?
//${renderlicensebadge(data.license)} line 38
function generateMarkdown(data) {
  return `
  # ${data.title} 
 

## **Description**

${data.description}

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## **Installation**

${data.installation}

## **Usage**

${data.usage}

## **License**



## **Contributing**
${data.contributing}
To contribute, please contact me via [Github](https://github.com/${data.gitHub}) or [email](mailto:${data.email})

## **Tests**

${data.tests}

`;
}



module.exports = generateMarkdown;

// added comments
