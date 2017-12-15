'use strict';

console.log("App.js is running!");

var app = {
  title: 'Indecision App',
  subTitle: 'My First React App'
  // JSX (Javascript XML)
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var user = {
  name: 'Mikael',
  age: 27,
  location: 'Jakarta'
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
