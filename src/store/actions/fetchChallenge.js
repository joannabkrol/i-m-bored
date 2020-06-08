import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchChallengeSuccess = (challenges) => {
    return {
        type: actionTypes.FETCH_CHALLENGE_SUCCESS,
        challenges: challenges
    }
}
export const fetchChallengeFail = (error) => {
    return {
        type: actionTypes.FETCH_CHALLENGE_FAIL,
        error: error,
    }
}
export const fetchChallengeStart = () => {
    return {
        type: actionTypes.FETCH_CHALLENGE_START,
    }
}

export const fetchChallenge = (token, userId) => {
    return dispatch => {
        dispatch(fetchChallengeStart());
        const queryParams = '?auth=' + token;
        axios.get(`https://i-m-bored-74278.firebaseio.com/challenges/${userId}.json` + queryParams)
        .then(response => {
            console.log(response.data);
            const fetchedChallenges = [];
            for (let key in response.data) {
                fetchedChallenges.push({
                    ...response.data[key],
                    id: key
                })
            }
            dispatch(fetchChallengeSuccess(fetchedChallenges))
        })
        .catch(error => {
            dispatch(fetchChallengeFail(error))
        });
    }
}