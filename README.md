# Project Solo
![A.I BOT](https://media.giphy.com/media/op9A3Z4Ox7XwY/giphy.gif)

[Project Solo Online](#)

[Solos Trello](https://trello.com/b/XxwADJRH/solo)

Project Solo is a interactive web assistant. Solo is able to answer questions, make recommendations, and perform actions by delegating requests to a set of Web services. Solo can perform various task such as adding events to your calendar, setting reminders, and answering day to day questions. Users can access Solo by creating an account and logging in. Solo will be available online as well as through a mobile app.

## Wire Frames
![frames](https://github.com/theamazingmrb/projectSolo/blob/master/assets/File_000%20(2).jpeg?raw=true)

## ERD
![erd](https://github.com/theamazingmrb/projectSolo/blob/master/assets/File_000%20(2).jpeg?raw=true)

## Technologies Used

- MongoDB
- Angular
- Express
- Node
- [Watson Developer Cloud](https://www.ibm.com/watson/developercloud/doc/index.html)
- Javascript & Jquery
- CSS
- BootStrap
- IBM Bluemix
- Ionic
- Ionic View
- Amazon Web services
- PaperClip

## Approach taken
![IDK](https://media.giphy.com/media/104vPBH8buV9vy/giphy.gif)
I honestly put this gif in as a joke, and it turned out to be my entire week. I began with setting up my users in the back end(which I never go to implement on the front end). The I started setting up Watsons IBM service. This process was fun. After I had some basic conversation pieces in I began trying to make my front-end. Initially I wanted two front ends, one for web, and one for mobile app. After a day of working on the fron end i decided to focus on the app. I began my ionic project and got to work. This was a uphill battle. Once I was able to verify it was connecting with my heroku back end I proceeded to bring in watson to the back end(slight nightmare).
## Installation instructions
Front end
Step 1: Clone the frontend repository from Github

Step 2: Run ionic serve -l in the terminal

optional
To have a mobile view on your devic

Step 1: Download Ionic view app

Step 2: create a account and sign in

Step 3: From the project folder run ionic upload

## Unsolved Problems and Known Bugs
Currently many
1: App is ugly
2: users cannot through the app create a account and log in
3:Messages are popping up as objects instead of actual text
4: Watsons conversation is currently very limited
