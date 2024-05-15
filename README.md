# About The Project


This repo contains e2e Cypress tests written in Gherkin format using Cucumber and step definitions in TypeScript using page object design pattern.

UI tests run on a dummy website https://www.saucedemo.com/

APIs tests run on https://reqres.in/

### Prerequisites

Node v18(LTS) or above & NPM are required to install the dependencies of the project.

### Installing 

#### Install the node_modules needed for the project

npm install 

### Running the tests.

**npm run cy:open** - This opens Cypress console window  & you can select individual tests/**Specs** that you want to run.

**npm run e2e:chrome** - This kicks off all your tests and they run on Chrome browser but in headless mode.

**npx cypress run --env tags="@test"** - This runs any tests that are tagged @test in the project. You can try other tags as well should you wish to.

**npm run test**  - This runs tests on the Electron browser in headless mode.

### Reporting 

Multiple Cucumber HTML Reporter is used to generate the html report. 

After the test run use

**npm run generate-html-report** - This will generate a html report that is saved in **reports** folder.

### Running tests in parallel 

Official Cypress documentation recommends running tests in parallel on CI environment by passing the **--parallel** key to **cypress run** 

This project leverages Cypress CircleCI Orb which is a configuration set in your .circleci/config.yml & runs 2 jobs "Cypress API Tests" &  "UI Tests - Chrome". Please note this is for demonstration purpose only and hasn't been integrated with CircleCI for this project.

### Linting 

Prettier, Eslint plugins have been used for this project.

**npm run prettier-format** - This will format your TypeScipt code.
