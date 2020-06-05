import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addChallengeSuccess = (id, challengeData) => {
    return {
        type: actionTypes.ADD_CHALLENGE_SUCCESS,
        challengeId: id,
        challengeData: challengeData,
    }
}
export const addChallengeFail = (error) => {
    return {
        type: actionTypes.ADD_CHALLENGE_FAIL,
        error: error,
    }
}
export const addChallengeStart = () => {
    return {
        type: actionTypes.ADD_CHALLENGE_START,
    }
}
export const addChallengeInit = () => {
    return {
        type: actionTypes.ADD_CHALLENGE_INIT
    }
}
export const addChallenge = (challengeData, token) => {
    return dispatch => {
        dispatch(addChallengeStart());
        axios.post('https://i-m-bored-74278.firebaseio.com/challenges.json?auth=' + token, challengeData)
        .then(response => {
            console.log(response.data);
            dispatch(addChallengeSuccess(response.data.name, challengeData))
        })
        .catch(error => {
            dispatch(addChallengeFail(error))
        });
    }
}