console.log("App.js is running!")

// JSX (Javascript XML)
var template = (
  <div>
    <h1>Mikael Airlangga Trianggoro</h1>
    <p>Indecision App!</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var template2 = (
  <div>
    <h1>Mikael Airlangga</h1>
    <p>Age: 28</p>
    <p>Location: Singapore</p>
  </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot); 