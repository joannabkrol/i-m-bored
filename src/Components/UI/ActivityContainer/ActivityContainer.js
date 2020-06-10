import React from 'react';
import './ActivityContainer.css';

const activitySquare = (props) => {

    return (
    <div className={`${props.containerStyle} ${props.colorStyle} Container`} onClick={props.clicked}>
    {props.children}
    </div>)
}
export default activitySquare