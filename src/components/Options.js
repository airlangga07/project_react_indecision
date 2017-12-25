import React, { Component } from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(op => <Option key={op} handleDeleteOption={props.handleDeleteOption} option={op} />)}
    </div>
  )
}

export default Options;