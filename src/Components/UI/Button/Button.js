import React from 'react';
import './Button.css';

const button = (props) => (
    <div className={`${props.size} ${props.position} ${props.colorType} Button`} 
    onClick={props.clicked}>
    {props.children}</div>
    )

export default button;
