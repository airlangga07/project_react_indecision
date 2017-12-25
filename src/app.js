import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class IndecisionApp extends Components {
//   render() {
//     return (
//       <div>Hello!</div>
//     )
//   }
// }
const template = React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));