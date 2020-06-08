import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    added: false,
    finishedChallenges: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_FINISHED_CHALLENGE_INIT:
            return {
                ...state,
                added: false,
            };
        case actionTypes.ADD_FINISHED_CHALLENGE_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.ADD_FINISHED_CHALLENGE_SUCCESS:
            const newChellange = {
                ...action.finishedChallengeData,
                id: action.challengeId
            }
            return {
                ...state,
                loading: false,
                added: true,
                finishedChallenges: state.finishedChallenges.concat(newChellange),
            }
        case actionTypes.ADD_FINISHED_CHALLENGE_FAIL:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }
}

export default reducer;