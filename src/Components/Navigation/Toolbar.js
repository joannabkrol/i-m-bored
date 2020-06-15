import React from 'react';
import classes from './Toolbar.module.css';
import Hamburger from './SideDrawer/Hamburger/Hamburger';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

const Navigation = (props) => {
    return (
            <header className={classes.Header}>
                <Logo/>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems 
                        isAuthenticated={props.isAuth}
                    />
                </nav>
                <Hamburger clicked={props.toggleSideDrawer}/>
            </header>
    )
}

export default Navigation;