# My Grocery List - Front End

## Introduction

The My Grocery List project is a custom grocery list full-stack application made with JavaScript. It allows for adding, checking off(editing) and deleting grocery items from a web browser. Checked off items are displayed below the main grocery list so they can be added back with convenience. Items are read, edited, deleted and stored long-term in a database.

## Front End (User Interface)

[My Grocery List - Front End](https://github.com/merogers/my-grocery-app-frontend.git).

This is the user interface for the application. It is made using the [React](https://reactjs.org/) framework/library.

Grocery items from the back-end database are also stored in local state. State is managed with the new [React Hooks](https://reactjs.org/docs/hooks-intro.html) and application-wide state is available through the useContext hook rather than relying on an external state management library like [Redux](https://redux.js.org/).

It also features an [Error Boundary](https://reactjs.org/docs/error-boundaries.html) that helps with app crashing and alerts the application user if there are any issues connecting with the back-end database.

## Back End (API and Database)

See [My Grocery List - Back End](https://github.com/merogers/my-grocery-app-backend.git) for more details. 

## Usage

Clone the project to your computer eg. `git clone https://github.com/merogers/my-grocery-app-frontend.git` and edit the URL, and enpoints if necessary, in /src/config.js so it can connect to the back-end database.

In the project directory, you have access to two [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) scripts to develop and deploy your very own version of this application.

- To launch the development server, run `npm start`
- To create a production-ready version of this application run `npm build` or deploy to the service of your choice eg. Netlify.