import React from 'react';
import Aux from '../../../Hoc/Aux/Aux';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import CloseButton from '../../UI/CloseButton/CloseButton';

const sideDrawer = (props) => {
    let activeClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        activeClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.close}/>
            <div className={activeClasses.join(' ')}>
                <div className={classes.Logo}>Logo</div>
                <nav>
                    <NavigationItems />
                </nav>
                <div className={classes.CloseButton}>
                <CloseButton clicked={props.close}/>
                </div>
                
            </div>
        </Aux>
    )
}

export default sideDrawer;