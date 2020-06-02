import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" clicked={props.clicked} exact>Home</NavigationItem>
        <NavigationItem link="/catalog" clicked={props.clicked}>Catalog</NavigationItem>
        <NavigationItem link="/login" clicked={props.clicked}>Log in</NavigationItem>
    </ul>
);

export default navigationItems;