import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Navigation/Footer/Footer';

import {connect} from 'react-redux';

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
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}
                />
                <Toolbar 
                isAuth={this.props.isAuthenticated}
                toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <main className='Layout'>
                {this.props.children}
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null
    }
};

export default connect(mapStateToProps)(Layout);