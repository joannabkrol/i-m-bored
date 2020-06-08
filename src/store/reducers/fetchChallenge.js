import * as actionTypes from '../actions/actionTypes';

const initialState = {
    challenges: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_CHALLENGE_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_CHALLENGE_SUCCESS:
            return {
                ...state,
                challenges: action.challenges,
                loading: false,
            };
        case actionTypes.FETCH_CHALLENGE_FAIL:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    }
}

export default reducer;