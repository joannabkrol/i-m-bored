import * as actionTypes from '../actions/actionTypes';

const initialState = {
    finishedChallenges: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FINISHED_CHALLENGE_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_FINISHED_CHALLENGE_SUCCESS:
            return {
                ...state,
                finishedChallenges: action.finishedChallenges,
                loading: false,
            };
        case actionTypes.FETCH_FINISHED_CHALLENGE_FAIL:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    }
}

export default reducer;