import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    render() {
        return (
            <React.Fragment>
                <Backdrop />
                <div className={classes.Modal.Success}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
export default Modal;