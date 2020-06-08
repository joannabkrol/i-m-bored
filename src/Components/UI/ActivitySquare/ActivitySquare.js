import React from 'react';
import classes from './ActivitySquare.module.css';

const activitySquare = (props) => (
    <div className={classes.ActivitySquare} onClick={props.clicked}>
    {props.children}
    </div>
)
export default activitySquare