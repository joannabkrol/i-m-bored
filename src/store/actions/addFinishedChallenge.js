import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addFinishedChallengeSuccess = (id, finishedChallengeData) => {
    return {
        type: actionTypes.ADD_FINISHED_CHALLENGE_SUCCESS,
        challengeId: id,
        finishedChallengeData: finishedChallengeData,
    }
}
export const addFinishedChallengeFail = (error) => {
    return {
        type: actionTypes.ADD_FINISHED_CHALLENGE_FAIL,
        error: error,
    }
}
export const addFinishedChallengeStart = () => {
    return {
        type: actionTypes.ADD_FINISHED_CHALLENGE_START,
    }
}
export const addFinishedChallengeInit = () => {
    return {
        type: actionTypes.ADD_FINISHED_CHALLENGE_INIT
    }
}
export const addFinishedChallenge = (finishedChallengeData, token) => {
    const activityId = finishedChallengeData.userId + finishedChallengeData.activity;
    return dispatch => {
        dispatch(addFinishedChallengeStart());
        axios.put(`https://i-m-bored-74278.firebaseio.com/finished-challenges/${finishedChallengeData.userId}/${activityId}.json?auth=` + token, finishedChallengeData)
        .then(response => {
            console.log(response.data);
            dispatch(addFinishedChallengeSuccess(response.data.name, finishedChallengeData))
        })
        .catch(error => {
            dispatch(addFinishedChallengeFail(error))
        });
    }
}