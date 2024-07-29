// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license === 'Apache License 2.0'){licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
  else if (license === 'MIT License'){licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
  else if (license === 'Boost Software License 1.0'){licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`}
  else if (license === 'Mozilla Public License'){licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
  else if (license === 'The Unlicense'){licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`}
  else {licenseBadge = ``};return licenseBadge;
}
//'Apache License 2.0', 'MIT License', 'Boost Software License 2.0', 'Mozilla Public License', 'The Unlicense', 'skip'
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'Apache License 2.0'){licenseLink = `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`}
  else if (license === 'MIT License'){licenseLink = `[MIT](https://opensource.org/licenses/MIT)`}
  else if (license === 'Boost Software License 1.0'){licenseLink = `[BSL-1.0](https://www.boost.org/LICENSE_1_0.txt)`}
  else if (license === 'Mozilla Public License'){licenseLink = `[MPL-2.0](https://opensource.org/licenses/MPL-2.0)`}
  else if (license === 'The Unlicense'){licenseLink = `[Unlicense](http://unlicense.org/)`}
  else {licenseLink = ``}; return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseLink = renderLicenseLink(data.license);
  return `## License
  ${data.license}
  ${licenseLink}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
renderLicenseBadge(data.license);
renderLicenseLink(data.license);
console.log(data);
  return `# ${data.title} ${licenseBadge}
    
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
      
  ## Installation
  ${data.installationGuide}
      
  ## Usage
  ${data.usage}
      
  ${renderLicenseSection(data)}
      
  ## Contributors
  ${data.contributors}
      
  ## Tests
  ${data.tests}
      
  ## Questions
  If you have any questions, please email me at ${data.email}. You can find more of my work at ${data.github}.
  `;
}

export default generateMarkdown;

