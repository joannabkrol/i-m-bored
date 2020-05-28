import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    toggleSideDrawerHandler = (prevState) => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render () {
        return (
            <React.Fragment>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}
                />
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;