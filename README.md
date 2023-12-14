# OmniHealth Records

## User Story
1. As a user, I want to use an application for storing and managing data related to my Behavioral Health practice.

2.  As a user, I want to be able to retrieve data related to my clients, employees, and the services my practice provides.

## Acceptance Criteria
- GIVEN a webpage with electronic health records. 

- WHEN I load up the page for the first time, I am greeted with a login page with email and password to sign into an account, or a button to sign-up.

-WHEN I click on sign-up I am brought to form where I can add a username, email, and password

-THEN I am routed to a page showing the sign in was successful

-WHEN I am signed in I am able to view and click the applications navigation bar

-WHEN I select a navigation element

-THEN I am routed to the correct page with its corresponding information displayed

-WHEN I select Edit

-THEN I am redirected to a form page that allows me to update the records

-WHEN the updates are submitted I am routed back to the main page and see the updates reflecting.

-WHEN I select Add

-THEN I am redirected to a form page that allows me to add to the records. 

-WHEN the add is submitted I am routed back to the main page and see the adds reflecting

-WHEN I select Delete

-THEN the selected information is deleted

## Description

This application allows users to enter data related to their Behavioral Health practices for record managment. Client data is entered and displayed for the healthcare providers. The services offered by the practice are also stored, as well as the data related to their contracted payers, programs offered, and the employee data for the individual rendering providers.

During the course of working on this application we found that accessing, displaying, and updating the data required creative solutions and adjustments to our schemas. We learned some of the limitations of apollo client UseMutation and UseQuery, specifically related to asyncronous data fetching. While it was extremely rewarding working on this project there is additional functionality we would like to include in future updates, such as activity scheduling, front desk check-ins, and medical claims generation.


## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
(VSCode Users)

To use this app, insure you have access and have downloaded Node onto your local machine. 

Upon opening the app for the first time, please check to make sure you have a package.json file in the file directory, on the lefthand side. If not, open your terminal using "Cntrl + `", or right click on the file directory and select "Open in intergrated terminal." Type into the terminal "npm init -y". 

Still within the terminal, type "npm i" into the terminal. This will install any necessary packages to run our app. 

## Usage

This application is used for storing data related to clients, employees, programs offered, activities provided, and contracted payers.

## License
MIT License

Copyright (c) 2023 Jessie Shockey and Anna Pincus. 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## How to Contribute

If you've like to contribute to this project, please reach out! We are incredibly proud of the work, and also of the numerous future opportunities for future features it could hold.

Before you reach out, please be familiar with the Contributor Covenant and the code of conduct within.

Link to GITHUB repo can be found here: https://github.com/shockeyj9/Omnihealth-Records