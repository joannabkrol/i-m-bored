import React, {Component} from 'react';

import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';

import classes from './Signup.module.css';
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
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
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
        //add a rule checking the email address
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
        event.preventDefault();
        //here will be redux dispatch method
        this.props.onAuthSignUp(this.state.controls.mail.value, this.state.controls.password.value, this.state.isSignup);
    }

    render(){
        const formElementsArray = [];
        for(let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let formSignUp = formElementsArray.map(formElement => (

            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                valueType={formElement.id.toUpperCase()}
                changed={(event) =>this.inputChangedHandler(event, formElement.id)}
            />
        ))
        if (this.props.loading) {
            formSignUp = <Spinner/>
        }
        /*
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        */
        return(
                    <div className={classes.Form}>
                        <h2>SIGN UP</h2>
                        <form>
                            {formSignUp}
                            <Button 
                                colorType="white" size="small" position="center"
                                clicked={this.submitSignUpHandler}
                            >SUBMIT</Button>
                        </form>
                    </div>
                
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loadingSignup,
        error: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthSignUp: (email, password) => dispatch(actions.authSignUp(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);