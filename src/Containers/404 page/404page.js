import React from 'react';
import {useLocation} from 'react-router-dom';

import './PageNotFound.css';


const PageNotFound = (props) => {
    const goBack = () => {
        props.history.push({pathname: '/'})
    };
    let location = useLocation();

    return (
        <div className='NotFound'>
        <h3>Page: <strong style={{color: '#13DFBA'}}>{location.pathname}</strong> doesn't exist.</h3>
        <p onClick={goBack}>Go back to main page </p>
        
        </div>
    );  
}

export default PageNotFound;