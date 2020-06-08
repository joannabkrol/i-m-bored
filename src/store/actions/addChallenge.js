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
    const activityId = challengeData.userId + challengeData.activity;
    return dispatch => {
        dispatch(addChallengeStart());
        axios.put(`https://i-m-bored-74278.firebaseio.com/challenges/${challengeData.userId}/${activityId}.json?auth=` + token, challengeData)
        .then(response => {
            console.log(response.data);
            dispatch(addChallengeSuccess(response.data.name, challengeData))
        })
        .catch(error => {
            dispatch(addChallengeFail(error))
        });
    }
}