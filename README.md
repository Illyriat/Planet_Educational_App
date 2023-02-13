# BBC Planet_Educational_App

## Group project

## Introduction

This was my second project while studying software development with CodeClan. The time frame for this project was from 3rd November 2022 to the 8th November 2022. This project resulted in the culmination of the second Module where we learned how to build software applications using JavaScript, React and MongoDb non-relational databases while adhering to test-driven development and following Agile methodology related to software development.

# MVP
The brief for this project was to develop an interactive software application for the BBC on a topic of your choice. The app should allow the user to move through sections of content and view content on a particular topic. After researching topics and available APIs to collect data we chose to develop an application that would allow the user to view the planets in our solar system and have information related to each planet dynamically update as the user moved through the application.

# Planning 
We began by setting up a Trello board where we could split the requirements of the project up into manageable sections and defining user stories that would allow us to complete the project in the given timeframe. We then moved on to creating wireframe to allow us to visualise the required component architecture that we would need to build in order to complete the application.

<img src="https://github.com/Illyriat/Planet_Educational_App/blob/main/Planet%20wireframes.png">

# Design
The finsihed product should be easy to navigate with clear call to actions and sign post for how to use the application effectively. Each button should give the user lear visual clues of what each section of the application does with clear sigt navigation at the top to allow the user to effectively navigate through each section of content.

<img src="https://github.com/Illyriat/Planet_Educational_App/blob/main/Planets_screenshots.jpg">

One of the main requiremnts for this project is that we wanted the layout to be responsnsive across a wide range of devices and viewports. We implemented CSS flexbox and Media Queries to allow the design to adapt and change dimensions when the user scale device dimensions.

<img src="https://github.com/Illyriat/Planet_Educational_App/blob/main/mobile_planets..jpg">

# How to use the application
To run the application do the following:
1. Fork the application by clicking on the Fork button at the top right of the screen.
2. Clone the repository by clicking on the green code button.
    * To clone the repository using HTTPS, under "HTTPS", click the cliboard icon.
    * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click the cliboard icon .
    * To clone a repository using GitHub CLI, click GitHub CLI, then click the cliboard icon. 
    * Open Terminal.
    * Change the current working directory to the location where you want the cloned directory.
    * Type **git clone**, and then paste the URL you copied earlier.
    * Press Enter to create your local clone.
 3. Navigate the directory where you have cloned the repository. In your terminal type the cmd **npm i** to install the dependancies required for the application.
 4. Type **cd server** into terminal to navigate to the server directory. Then type **npm run seeds** to populate the data required to run the application.
