import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" onClick={() => window.location.reload(false)} exact>Home</NavigationItem>
        <NavigationItem link="/catalog">Catalog</NavigationItem>
    </ul>
);

export default navigationItems;