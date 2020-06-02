import * as actionTypes from '../actions/actionTypes';
import {updatedObject} from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = (state, action) => {
    return updatedObject(state, {error: null, loading: true} );
}
const authSuccess = (state, action) => {
    return updatedObject(state, {
        loading: false, 
        userId: action.userId, 
        token: action.idToken, 
        error: null
    } );
}
const authFail = (state, action) => {
    return updatedObject(state, {
        error: action.error,
        loading: false
    } 
    );
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;    
    }
}

export default reducer;