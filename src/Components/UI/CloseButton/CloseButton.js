import React from 'react';
import './CloseButton.css';

const closeButton = (props) => (
    <div className='CloseButton' onClick={props.clicked}></div>
);

export default closeButton;