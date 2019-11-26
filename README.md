# favTracker
This app tracks your coffees and how much you like them! 

# Fav Tracker CRUD Application
Tracking Your fav stuff app that performs the CRUD operations via ORM. App is deployed on Heroku with JawsDB mySQL add-on. 

## Live Link
- https://pacific-journey-55427.herokuapp.com/

## Github Link
- https://github.com/moshecstern/favTracker

## Description on how to use the app
User can click on the button to display the coffees from drank to tasted and vica versa. 
User may also add coffees of their choice to the list.

## Requirements
- mySQL import database file schema.sql
- node.js for npm install the package.json
Type node server.js to run application
Type in browser localhost:3000

## Technologies Used
- HTML
- CSS
- Javascript
- Bootstrap
- NPM
- Node.js
- Express.js
- MySQL
- Heroku

## Code Explaination
- App reads from the mysql database of available coffees that can be drinken.
- Any coffee that have been drinken change their boolean value from 0 to 1.
- User can create a coffee via the create method from sequelize and saved to the database.
- User can also click on the delete button to delete specific coffees from the database. 
-- User can update the ratings by id to any coffee.
