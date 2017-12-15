"use strict";

console.log("App.js is running!");

// JSX (Javascript XML)
var template = React.createElement(
  "p",
  null,
  "Indecision App!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
