import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    errorSignin: null,
    loadingSignin: false,
    loadingSignup: false
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

//logout:
const authLogout = (state, action) => {
    return updatedObject(state, {
        token: null,
        userId: null
    })
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
        default: return state;    
    }
}

export default reducer;