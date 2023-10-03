# Cypress Petstore API Test Project


Welcome to the **Cypress Petstore API Test Project**! This repository contains automated tests written in Cypress to thoroughly test the endpoints of the Swagger Petstore API. These tests ensure the API's functionality, reliability, and adherence to expected behavior.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Test Reporting](#test-reporting)

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
    ├── cypress/
    │   ├── e2e/
    |   |   ├── tests/
    |   |   |   ├── pet-api
    |   |   |   ├── store-api
    |   |   |   ├── user-api 
    │   ├── fixtures/
    |   ├── videos/
    │   └── support/
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

## Test Reporting
Cypress provides detailed test logs, real-time test execution, and captures screenshots and videos for each test run.
<br>
<br>
<br>
<br>
<br>
### Thank you for checking out the Cypress Petstore API Test Project. Feel free to reach out if you have any questions or suggestions!
