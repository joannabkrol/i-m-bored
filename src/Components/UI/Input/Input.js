import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['Form-Input'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Form-Input_invalid');
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                />;
            break;
        default:
            inputElement = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            />;
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className='Form-Input_validationError'>Please enter a valid {props.valueType}</p>;
    }

    return (
        <div className='Form-ContainerInput'>
            <label className='Form-Label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default input;