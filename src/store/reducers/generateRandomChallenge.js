import * as actionTypes from '../actions/actionTypes';
import {activities} from '../../data/activitiesList';

const initialState = {
    randomChallenge: ''
}
const random = Math.floor(Math.random() * Math.floor(activities.length));

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RANDOM_CHALLENGE:
            return {
                ...state,
                randomChallenge: activities[random],
            };
        default: return state;
        }
        
    }

export default reducer;