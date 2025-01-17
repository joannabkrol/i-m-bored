import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import Spinner from "../../Components/UI/Spinner/Spinner";

import "./AuthLogIn.css";
import * as actions from "../../store/actions/index";

import SignUp from "../../Components/Signup/Signup";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";

import { Validation } from "../../Components/Utilities/Validation/Validation";

class Auth extends Component {
  state = {
    controls: {
      mail: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: true,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    showSignup: false,
    showResetPassword: false,
  };

  onChange = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: Validation(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  submitSignInHandler = (event) => {
    event.preventDefault();
    //here will be redux dispatch method
    this.props.onAuthSignIn(
      this.state.controls.mail.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  showSignupHandler = () => {
    this.setState({ showSignup: true });
  };
  showResetPasswordHandler = () => {
    this.setState({ showResetPassword: true });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        valueType={formElement.id.toUpperCase()}
        changed={(event) => this.onChange(event, formElement.id)}
      />
    ));
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMessage = null;
    if (this.props.errorSignin) {
      errorMessage = (
        <div className="Auth-ErrorMsg">
          <p>{this.props.errorSignin.message}</p>
        </div>
      );
    }
    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Redirect to="/user" />;
    }

    let auth = this.state.showSignup ? (
      <SignUp />
    ) : (
      <React.Fragment>
        {errorMessage}
        <div className="Auth">
          <div className="Auth-Form">
            <h2>SIGN IN</h2>
            <form>
              {form}
              <Button
                colorType="Button_white"
                size="Button_small"
                position="Button_center"
                buttonType="Button"
                clicked={this.submitSignInHandler}
              >
                SUBMIT
              </Button>
            </form>
            <p
              onClick={this.showSignupHandler}
              style={{
                textAlign: "center",
                color: "#13DFBA",
                cursor: "pointer",
              }}
            >
              {" "}
              Click here to Sign up{" "}
            </p>
            <p
              onClick={this.showResetPasswordHandler}
              style={{
                textAlign: "center",
                color: "#13DFBA",
                cursor: "pointer",
              }}
            >
              {" "}
              Click here to reset password{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
    if (this.state.showResetPassword) {
      auth = <ResetPassword />;
    }

    return (
      <React.Fragment>
        {authRedirect}

        {auth}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loadingSignin,
    errorSignin: state.auth.errorSignin,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSignIn: (email, password) =>
      dispatch(actions.authSignIn(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
