import React, {Component} from 'react';
import classes from './UserChallenges.module.css';

import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';

import Spinner from '../../Components/UI/Spinner/Spinner';
import ActivityContainer from '../../Components/UI/ActivityContainer/ActivityContainer';
import Modal from '../../Components/UI/Modal/Modal';
import Button from '../../Components/UI/Button/Button';
import RandomActivityModal from '../../Components/RandomActivityModal/RandomActivityModal';

class UserChallenges extends Component {
    state = {
        showModal: false,
        currentChallenge: null,
        showRandomChallengeModal: false,
    }
    componentDidMount() {
        this.props.onFetchChallenge(this.props.token, this.props.userId);
    }
    showModalHandler = (challenge) => {
        this.setState({
            showModal: true,
            currentChallenge: challenge,
        })
    }
    showRandomChallengeModalHandler = () => {  
        this.setState({
            showRandomChallengeModal: true,
        });
        this.props.onGenerateRandomChallenge();
    }
    hideRandomChallengeModalHandler = () => {
        this.setState({
            showRandomChallengeModal: false,
        });
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
            finishedChallenge: true,
        };
        //call to post the finished challenge:
        this.props.onAddFinishedChallenge(finishedChallengeData, this.props.token);
        //set up showModal state to false:
        this.setState({showModal: false});  
    }

    render() {
        let challenges = <Spinner />;
        if (!this.props.loading) {
            challenges = this.props.challenges.map(challenge => {
                if (!challenge.finishedChallenge) {
                    return (
                <ActivityContainer 
                    key={challenge.id} 
                    containerStyle="Activity" colorStyle="Navy"
                    clicked={() => this.showModalHandler(challenge.activity)}
                    >
                    {challenge.activity}
                </ActivityContainer>)
                }
                return null;
                })
        };
        let finishedChallenges = <Spinner />;
        if (!this.props.loading) {
            finishedChallenges = this.props.challenges.map(challenge => {
                if (challenge.finishedChallenge) {
                    return (
                    <ActivityContainer 
                    key={challenge.id} 
                    containerStyle="Activity" colorStyle="Navy"
                    
                    >
                    {challenge.activity}
                </ActivityContainer>)
                }
                return null;
            })
        };

        return (
            <React.Fragment>
            <Modal 
                show={this.state.showModal}
                hideModal={this.hideModalHandler}
                modalType="white">
                <p>Have you finished this challenge?</p>
                <Button size="small" colorType="white" clicked={this.addFinishedChallenge}>Yes</Button>
                <Button size="small"  colorType="white" clicked={this.hideModalHandler}>No</Button>
                    
            </Modal>
            <RandomActivityModal 
                show={this.state.showRandomChallengeModal} 
                hideModal={this.hideRandomChallengeModalHandler}
                randomActivity={this.props.randomChallenge}
                />
            <div className={classes.UserContainer}>
                <div className={classes.ChallengesContainer}>
                    <p className={classes.Header}>Your challenges</p>
                    <div className={classes.ActivitiesContainer}>
                    {challenges}
                    <ActivityContainer 
                        containerStyle="Activity" 
                        colorStyle="greenOnGreen"
                        clicked={this.showRandomChallengeModalHandler}>
                        Add new challenge
                    </ActivityContainer>
                    </div>
                </div>
                <div className={classes.ChallengesContainer}>
                    <p className={classes.Header}>Your achievements</p>
                    <div className={classes.ActivitiesContainer}>
                    {finishedChallenges}
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
        randomChallenge: state.randomChallenge.randomChallenge,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchChallenge: (token, userId) => dispatch(actions.fetchChallenge(token, userId)),
        onAddFinishedChallenge: (finishedChallengeData, token) => dispatch(actions.addFinishedChallenge(finishedChallengeData, token)),
        onGenerateRandomChallenge: () => dispatch(actions.generateRandomChallenge())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChallenges);