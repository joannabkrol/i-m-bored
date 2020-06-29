import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';
import Logo from '../Logo/Logo';

const sideDrawer = (props) => {
    let activeClasses = ['SideDrawer', 'SideDrawer_close'];
    if (props.open) {
        activeClasses = ['SideDrawer', 'SideDrawer-open'];
    }

    return (
        <React.Fragment>
        <Backdrop show={props.open} clicked={props.close}/>
            <div className={activeClasses.join(' ')}>
                <div className='SideDrawer-Logo'><Logo/></div>
                <nav>
                    <NavigationItems clicked={props.close}
                        isAuthenticated={props.isAuth}
                    />
                </nav>
                <div className='SideDrawer-CloseButton'>
                <Button buttonType="CloseButton" clicked={props.close}/>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default sideDrawer;