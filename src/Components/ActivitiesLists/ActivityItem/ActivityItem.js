import React from 'react';
import classes from './ActivityItem.module.css';

const activityItem = (props) => (
    <div className={classes.ActivityItem}>{props.label}</div>
)
export default activityItem