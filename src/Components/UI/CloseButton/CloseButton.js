import React from 'react';
import classes from './CloseButton.module.css';

const closeButton = (props) => (
    <div className={classes.CloseButton} onClick={props.clicked}></div>
);

export default closeButton;