import * as actionTypes from './actionTypes';
import axios from 'axios';

//sign in:
export const authStartSignIn = () => {
    return {
        type: actionTypes.SIGNIN_START
    }
}

export const authSuccessSignIn = (token, userId) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        idToken: token,
        userId: userId,
    }
}

export const authFailSignIn = (error) => {
    return {
        type: actionTypes.SIGNIN_FAIL,
        error: error
    }
}
//sign up:
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

//logout:
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

//async:
export const authSignUp = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAIWd8gJ_GjMAJRF20teOHixvu9HHy6p4';
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            //elements for staying loggedin after reloading the page:
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            sendVerificationEmail(response.data.idToken)
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        })
    }
}

const sendVerificationEmail = (idToken) => {
    const body = {
        requestType: 'VERIFY_EMAIL',
        idToken
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDAIWd8gJ_GjMAJRF20teOHixvu9HHy6p4';
    axios.post(url, body)
    .then(response => {
        console.log('Sent verification email', response);
    })
    .catch(err => {
        console.log(err);
    })
}

export const authSignIn = (email, password) => {
    return dispatch => {
        dispatch(authStartSignIn());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAIWd8gJ_GjMAJRF20teOHixvu9HHy6p4';
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            //elements for staying loggedin after reloading the page:
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccessSignIn(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailSignIn(err.response.data.error));
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/ 1000));
            }
        }
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

//reset password:
export const authStartResetPassword = () => {
    return {
        type: actionTypes.RESET_PASSWORD_START
    }
}

export const authSuccessResetPassword = () => {
    return {
        type: actionTypes.RESET_PASSWORD_SUCCESS,
    }
}

export const authFailResetPassword = (error) => {
    return {
        type: actionTypes.RESET_PASSWORD_FAIL,
        error: error
    }
}
export const authResetPassword = (email) => {
    return dispatch => {
        dispatch(authStartResetPassword());
        let body = {
            requestType: "PASSWORD_RESET",
            email: email
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDAIWd8gJ_GjMAJRF20teOHixvu9HHy6p4';
        axios.post(url, body)
        .then(response => {
            console.log(response);
            dispatch(authSuccessResetPassword());
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailResetPassword(err.response.data.error));
        })
    }
}