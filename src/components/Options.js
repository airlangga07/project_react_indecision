import React, { Component } from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {props.options.map(op => <Option key={op} handleDeleteOption={props.handleDeleteOption} option={op} />)}
    </div>
  )
}

export default Options;