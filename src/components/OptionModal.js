import React, { Component } from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => {
  return (
    <ReactModal
      isOpen={!!props.selectedOption}
      onRequestClose={() => props.handleModalDismiss()}
      contentLabel="Selected Option"
      ariaHideApp={false}
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={() => props.handleModalDismiss()}>Okay</button>
    </ReactModal>
  ) 
}

export default OptionModal;