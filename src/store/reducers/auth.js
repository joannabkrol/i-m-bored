import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    errorSignin: null,
    loadingSignin: false,
    loadingSignup: false,
    errorResetPassword: null,
    loadingResetPassword: null,
};
//SignIn:
const authStartSignIn = (state, action) => {
    return updatedObject(state, {errorSignin: null, loadingSignin: true} );
}
const authSuccessSignIn = (state, action) => {
    return updatedObject(state, {
        loadingSignin: false, 
        userId: action.userId, 
        token: action.idToken, 
        errorSignin: null
    } );
}
const authFailSignIn = (state, action) => {
    return updatedObject(state, {
        errorSignin: action.error,
        loadingSignin: false
    } 
    );
}
//SignUp:
const authStart = (state, action) => {
    return updatedObject(state, {error: null, loadingSignup: true} );
}
const authSuccess = (state, action) => {
    return updatedObject(state, {
        loadingSignup: false, 
        userId: action.userId, 
        token: action.idToken, 
        error: null
    } );
}
const authFail = (state, action) => {
    return updatedObject(state, {
        error: action.error,
        loadingSignup: false
    } 
    );
}
//Reset password:
const authStartResetPassword = (state, action) => {
    return updatedObject(state, {errorResetPassword: null, loadingResetPassword: true} );
}
const authSuccessResetPassword = (state, action) => {
    return updatedObject(state, {
        loadingResetPassword: false, 
        errorResetPassword: null
    } );
}
const authFailResetPassword = (state, action) => {
    return updatedObject(state, {
        errorResetPassword: action.error,
        loadingResetPassword: false
    } 
    );
}

//logout:
const authLogout = (state, action) => {
    return updatedObject(state, {
        token: null,
        userId: null
    })
}

const setAuthRedirectPath = (state, action) => {
    return updatedObject(state, {authRedirectPath: action.path})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_START: return authStartSignIn(state, action);
        case actionTypes.SIGNIN_SUCCESS: return authSuccessSignIn(state, action);
        case actionTypes.SIGNIN_FAIL: return authFailSignIn(state, action);
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        case actionTypes.RESET_PASSWORD_START: return authStartResetPassword (state, action);
        case actionTypes.RESET_PASSWORD_SUCCESS: return authSuccessResetPassword(state, action);
        case actionTypes.RESET_PASSWORD_FAIL: return authFailResetPassword(state, action);

        default: return state;    
    }
}

export default reducer;