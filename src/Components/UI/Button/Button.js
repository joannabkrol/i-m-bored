import React from 'react';
import './Button.css';

const button = (props) => (
    <button className={`${props.size} ${props.position} ${props.colorType} ${props.buttonType} Btn`} 
    onClick={props.clicked}>
    {props.children}</button>
    )

export default button;
