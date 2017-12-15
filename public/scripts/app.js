"use strict";

console.log("App.js is running!");

// JSX (Javascript XML)
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Mikael Airlangga Trianggoro"
  ),
  React.createElement(
    "p",
    null,
    "Indecision App!"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Mikael Airlangga"
  ),
  React.createElement(
    "p",
    null,
    "Age: 28"
  ),
  React.createElement(
    "p",
    null,
    "Location: Singapore"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
