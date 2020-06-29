import React, {Component} from 'react';

import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';

import './ResetPassword.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Auth extends Component {
    state = {
        controls: {
            mail: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: true,
                touched: false
            },
        },
        isPasswordReset: "notReseted"
    }

    checkValidity(val, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = val.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = val.length >= rules.minLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(val) && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({controls: updatedControls});
    }
    submitSignUpHandler = (event) => {
        console.log(this.props.error)
        event.preventDefault();
        this.props.onAuthResetPassword(this.state.controls.mail.value);
        if (!this.props.error) {
            this.setState({ isPasswordReset: "reseted"})
        }
    }
    goBackToSignin = () => {
        window.location.reload();
    }
    
    render(){
        let formElements = (
            <Input
                elementType={this.state.controls.mail.elementType}
                elementConfig={this.state.controls.mail.elementConfig}
                value={this.state.controls.mail.value}
                invalid={!this.state.controls.mail.valid}
                shouldValidate={this.state.controls.mail.validation}
                touched={this.state.controls.mail.touched}  
                changed={(event) =>this.inputChangedHandler(event, "mail")}
            />)

        if (this.props.loading) {
            formElements = <Spinner/>
        }
        let errorMessage = this.props.error && (<div className='Signup-ErrorMsg'><p>{this.props.error.message}</p></div>);
        
        let formReset = <React.Fragment>
        <h2>RESET PASSWORD</h2>
        <form>
            {formElements}
            <Button 
                colorType="Button_white" size="Button_small" position="Button_center"  buttonType="Button"
                clicked={this.submitSignUpHandler}
            >SUBMIT</Button>
        </form>
    </React.Fragment>;

        let formSuccessReset = <div className="ResetPassword-SuccessContainer">
        <h2>Link to change the password has been sent to your email</h2>  
    </div>;

        const switchView = () => {
            switch(this.state.isPasswordReset) {
                case "reseted":
                    return this.props.error === null ? formSuccessReset : formReset;
                case "notReseted":
                    return formReset;
                default:
                    return formReset;
            }
        }

        return (
        <div style={{height: "80vh"}}>
            {errorMessage}
            
            <div className='Signup-Form'>
            {switchView()}
                <p className="ResetPassword-Text_green" onClick={this.goBackToSignin}>Click here to Signin</p>    
            </div>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loadingResetPassword,
        error: state.auth.errorResetPassword
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthResetPassword: (email) => dispatch(actions.authResetPassword(email)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);