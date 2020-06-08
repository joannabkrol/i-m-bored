import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    added: false,
    challenges: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_CHALLENGE_INIT:
            return {
                ...state,
                added: false,
            };
        case actionTypes.ADD_CHALLENGE_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.ADD_CHALLENGE_SUCCESS:
            const newChellange = {
                ...action.challengeData,
                id: action.challengeId
            }
            return {
                ...state,
                loading: false,
                added: true,
                challenges: state.challenges.concat(newChellange),
            }
        case actionTypes.ADD_CHALLENGE_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default reducer;