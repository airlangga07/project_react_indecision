console.log("App.js is running!")

var app = {
  title: 'Indecision App',
  subTitle: 'My First React App'
}
// JSX (Javascript XML)
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var user = {
  name: 'Mikael',
  age: 27,
  location: 'Jakarta'
};

var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); 