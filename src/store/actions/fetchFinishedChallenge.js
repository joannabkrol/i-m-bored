import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchFinishedChallengeSuccess = (finishedChallenges) => {
    return {
        type: actionTypes.FETCH_FINISHED_CHALLENGE_SUCCESS,
        finishedChallenges: finishedChallenges,
    }
}
export const fetchFinishedChallengeFail = (error) => {
    return {
        type: actionTypes.FETCH_FINISHED_CHALLENGE_FAIL,
        error: error,
    }
}
export const fetchFinishedChallengeStart = () => {
    return {
        type: actionTypes.FETCH_FINISHED_CHALLENGE_START,
    }
}

export const fetchFinishedChallenge = (token, userId) => {
    return dispatch => {
        dispatch(fetchFinishedChallengeStart());
        const queryParams = '?auth=' + token;
        axios.get(`https://i-m-bored-74278.firebaseio.com/finished-challenges/${userId}.json` + queryParams)
        .then(response => {
            console.log(response.data);
            const fetchedChallenges = [];
            for (let key in response.data) {
                fetchedChallenges.push({
                    ...response.data[key],
                    id: key
                })
            }
            dispatch(fetchFinishedChallengeSuccess(fetchedChallenges))
        })
        .catch(error => {
            dispatch(fetchFinishedChallengeFail(error))
        });
    }
}