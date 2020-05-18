import React from 'react'
import classes from './CategoryItem.module.css';

const categoryItem = (props) => (
    <div 
        className={classes.CategoryItem}
        onClick={() => props.select(props.category)}
    >
        {props.category}
    </div>
);

export default categoryItem;