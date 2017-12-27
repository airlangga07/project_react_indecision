import React, { Component } from 'react';

const Option = props => {
  return (
    <div>
      {props.option}
      <button className="button button--link" onClick={() => props.handleDeleteOption(props.option)}>Remove</button>
    </div>
  )
}

export default Option;