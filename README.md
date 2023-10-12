# Cypress Petstore API Test Project


Welcome to the **Cypress Petstore API Test Project**! This repository contains automated tests written in Cypress to thoroughly test the endpoints of the Swagger Petstore API. These tests ensure the API's functionality, reliability, and adherence to expected behavior.

## Table of Contents

- [Cypress Petstore API Test Project](#cypress-petstore-api-test-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Writing Tests](#writing-tests)
  - [Running Tests](#running-tests)
  - [Reports](#reports)
  - [Continuous Integration](#continuous-integration)

## Introduction

The **Cypress Petstore API Test Project** is a personal project aimed at automating the testing process of the Swagger Petstore API. By utilizing the Cypress testing framework, this project ensures that the API endpoints function as expected and provides a reliable basis for further development.

## Features

- Automated tests for all Swagger Petstore API endpoints.
- Comprehensive test coverage to verify API behavior.
- Integration with the Cypress testing framework.
- Easy setup and execution of tests using the Cypress Test Runner.
- Detailed test reporting, screenshots, and videos.

## Prerequisites

Before getting started, ensure you have the following prerequisites:

- Node.js (v12 or later) and npm (Node Package Manager) installed.
- Basic understanding of API concepts and testing principles.
- Familiarity with the Swagger Petstore API.

## Installation

1. **Clone the Repository**: Start by cloning this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cypress-petstore.git

2. **Navigate to Directory**: Change your working directory to the project folder:
   ```bash
   cd cypress-petstore

3. **Install Dependencies**: Install the required Node.js packages using npm:
    ```bash
    npm install

## Project Structure

The project is structured for clarity and modularity:

    ```
    cypress-petstore
    ├──.github/
    │   ├── workflows/
    ├── cypress/
    │   ├── e2e/
    |   |   ├── tests/
    |   |   |   ├── pet-api
    |   |   |   ├── store-api
    |   |   |   ├── user-api 
    │   ├── fixtures/
    |   ├── results/
        ├── support/
    |   └── videos/
    ├── cypress.json
    ├── package.json
    ├── README.md
    └── ...

## Writing Tests
The tests are organized under the cypress/e2e/tests directory, categorized by different API endpoints.

## Running Tests
1. Open the Cypress Test Runner by running:

    ```bash
    npx cypress open

2. Click on the desired test file to run the tests.

## Reports
1. Initial Setup
   Make sure you have set up Cypress and Mochawesome in your project. If you haven't done so already, follow the relevant setup steps.

2. Run Your Cypress Tests
   Ensure that you already have your Cypress tests ready and working correctly. You can run them with the following command:
    ```bash
    npm run cypress:run

3. Accessing the Mochawesome Report
   After running the tests, a directory named mochawesome-report will be created in your project. This directory contains the reports generated automatically. You can access the HTML report by opening the mochawesome.html file in a web browser.
   ```bash
   ./results/mochawesome.html

4. Verifying the Reports
   Mochawesome provides a wealth of information about test results, including test outcomes, detailed logs, execution times, and more. You can use the report to:

   Check test results.
   Analyze detailed logs for specific tests.
   Identify failing tests and the reasons for the failures.

### Example of Verifying Reports

   Here's a simple example of how to verify reports using Mochawesome:
   
   1. Open the mochawesome.html file in your browser.
   
   2. On the report page, you'll see an overview of the tests executed.
   
   3. To view details of a specific test, click on the test name in the "Test" column on the left. This will open a page with detailed information about the test.
   
   4. To access logs and error messages, scroll down on the test details page.
   
   5. Use the information provided in the report to troubleshoot issues or verify test results.
   
   Keep in mind that Mochawesome offers advanced features such as chart generation and metrics that can help in analyzing test results. Explore the Mochawesome documentation for more information on making the most of this report.
   

## Continuous Integration
This project contains CI with Github Actions. You can see the configuration file [here](https://github.com/vilimons/cypress-vuestorefront/blob/main/cypress/.github/workflow/main.
Cypress provides detailed test logs, real-time test execution, and captures screenshots and videos for each test run.
<br>
<br>
<br>
### Thank you for checking out the Cypress Petstore API Test Project. Feel free to reach out if you have any questions or suggestions!
