console.log("App.js is running!")

// JSX (Javascript XML)
// var template = <p>This is JSX from App.js</p>;
var template = React.createElement("h1", null, "Something new");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); 