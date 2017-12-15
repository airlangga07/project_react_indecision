console.log("App.js is running!")

var app = {
  title: 'Indecision App',
  subTitle: 'My First React App',
  options: ['One', 'Two']
}
// JSX (Javascript XML)
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
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

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    <p>Location: {getLocation(user.location)}</p>
  </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); 