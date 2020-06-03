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
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        })
    }
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
            dispatch(authSuccessSignIn(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailSignIn(err.response.data.error));
        })
    }
}