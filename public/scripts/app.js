'use strict';

console.log('app is running');

var appRoot = document.getElementById('app');

var toggleStatus = false;

var toggleButton = function toggleButton() {
  toggleStatus = toggleStatus ? false : true;
  // toggleStatus = !toggleStatus; <-- this should be used!
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleButton },
      toggleStatus ? 'Hide Details' : 'Show Details'
    ),
    toggleStatus && React.createElement(
      'p',
      null,
      'Hello! this is the secret message!'
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
