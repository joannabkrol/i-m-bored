import React, {Component} from 'react';
import classes from './UserChallenges.module.css';

import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

import Spinner from '../../Components/UI/Spinner/Spinner';
import ActivityContainer from '../../Components/UI/ActivityContainer/ActivityContainer';
import Modal from '../../Components/UI/Modal/Modal';
import Button from '../../Components/UI/Button/Button';

class UserChallenges extends Component {
    state = {
        showModal: false,
        currentChallenge: null,
    }
    componentDidMount() {
        this.props.onFetchChallenge(this.props.token, this.props.userId);
        //call to fetch finishedChallenges:
    }
    showModalHandler = (challenge) => {
        this.setState({
            showModal: true,
            currentChallenge: challenge,
        })
    }
    hideModalHandler = () => {
        this.setState({
            showModal: false,
        })
    }
    addFinishedChallenge = (event) => {
        event.preventDefault();
        const finishedChallengeData = {
            activity: this.state.currentChallenge,
            userId: this.props.userId,
        };
        //call to post the finished challenge:
        this.props.onAddFinishedChallenge(finishedChallengeData, this.props.token);
        //call to delete challenge from challenges on server:
        //set up showModal state to false
        this.setState({showModal: false});
    }

    render() {
        let challenges = <Spinner />;
        if (!this.props.loading) {
            challenges = this.props.challenges.map(challenge => (
                <ActivityContainer 
                    key={challenge.id} 
                    containerStyle="Activity" colorStyle="White"
                    clicked={() => this.showModalHandler(challenge.activity)}
                    >
                    {challenge.activity}
                </ActivityContainer>
            ))
        }

        return (
            <React.Fragment>
            <Modal 
                show={this.state.showModal}
                hideModal={this.hideModalHandler}
                modalType="white">
                <p>Have you finished this challenge?</p>
                <Button size="small" colorType="whitep" clicked={this.addFinishedChallenge}>Yes</Button>
                <Button size="small"  colorType="whitep" clicked={this.hideModalHandler}>No</Button>
                    
            </Modal>
            <div className={classes.UserContainer}>
                <div className={classes.Challenges}>
                    <p className={classes.Header}>Your challenges</p>
                    <div className={classes.ActivitiesContainer}>
                    {challenges}
                    </div>
                </div>
                <div className={classes.Achivments}>
                    <p className={classes.Header}>Your achivments</p>
                    <div className={classes.ActivitiesContainer}>

                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        challenges: state.fetchChallenge.challenges,
        loading: state.fetchChallenge.loading,
        token: state.auth.token,
        userId: state.auth.userId,
        finishedChallenges: state.finishedChallenge.finishedChallenges,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchChallenge: (token, userId) => dispatch(actions.fetchChallenge(token, userId)),
        onAddFinishedChallenge: (finishedChallengeData, token) => dispatch(actions.addFinishedChallenge(finishedChallengeData, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChallenges);