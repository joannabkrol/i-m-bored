import React from 'react';
import './Toolbar.css';
import Hamburger from './SideDrawer/Hamburger/Hamburger';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo';

const Toolbar = (props) => {
    return (
            <header className='Toolbar'>
                <Logo/>
                <nav className='Toolbar_desktopOnly'>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
                <Hamburger clicked={props.toggleSideDrawer}/>
            </header>
    )
}

export default Toolbar;