import * as actionTypes from '../actions/actionTypes';


const initialState = {
    randomChallenge: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RANDOM_CHALLENGE:
            return {
                ...state,
                randomChallenge: action.payload,
            };
        default: return state;
        }
        
    }

export default reducer;