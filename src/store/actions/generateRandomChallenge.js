import * as actionTypes from './actionTypes';
import {activities} from '../../data/activitiesList';

export const generateRandomChallenge = () => {
    const random = Math.floor(Math.random() * Math.floor(activities.length));
    return {
        type: actionTypes.RANDOM_CHALLENGE,
        payload: activities[random]
    }
}