import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" clicked={props.clicked} exact>Home</NavigationItem>
        <NavigationItem link="/catalog" clicked={props.clicked}>Catalog</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/user" clicked={props.clicked}>Your challenges</NavigationItem>
        : null}
        {props.isAuthenticated ? <NavigationItem link="/logout" clicked={props.clicked}>Log out</NavigationItem>
        :<NavigationItem link="/signin" clicked={props.clicked}>Sign in</NavigationItem>}
    </ul>
);

export default navigationItems;