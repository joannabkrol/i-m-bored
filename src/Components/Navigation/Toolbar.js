import React from 'react';
import classes from './Toolbar.module.css';
import Hamburger from './SideDrawer/Hamburger/Hamburger';
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = (props) => {
    return (
            <header className={classes.Header}>
                <div>
                    Logo
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
                <Hamburger clicked={props.toggleSideDrawer}/>
            </header>
    )
}

export default Navigation;