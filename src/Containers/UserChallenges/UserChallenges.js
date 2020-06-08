import React, {Component} from 'react';
import classes from './UserChallenges.module.css';

import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

import Spinner from '../../Components/UI/Spinner/Spinner';
import ActivitySquare from '../../Components/UI/ActivitySquare/ActivitySquare';

class UserChallenges extends Component {
    componentDidMount() {
        this.props.onFetchChallenge(this.props.token, this.props.userId);
    }

    render() {
        let challenges = <Spinner />;
        if (!this.props.loading) {
            challenges = this.props.challenges.map(challenge => (
                <ActivitySquare key={challenge.id}>
                    {challenge.activity}
                </ActivitySquare>
            ))
        }

        return (
            <div className={classes.UserContainer}>
                <div className={classes.Challenges}>
                    <p className={classes.Header}>Your challenges</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    {challenges}
                    </div>
                </div>
                <div className={classes.Achivments}>
                    <p className={classes.Header}>Your achivments</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        challenges: state.fetchChallenge.challenges,
        loading: state.fetchChallenge.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchChallenge: (token, userId) => dispatch(actions.fetchChallenge(token, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChallenges);