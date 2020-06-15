import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './Home.module.css';

import {activities} from '../../data/activitiesList';
import image from '../../assets/1x/boredwomen.png';

import RandomActivity from '../../Components/RandomActivity/RandomActivity';

const random = Math.floor(Math.random() * Math.floor(activities.length));

class Home extends Component {
    state = {
        //showActivity: false,
        showSuccessModal: false,
        showFailModal: false,
        randomActivity: { label: '', category: '' },
    }
    
    addChallengeHandler = (event) => {
        event.preventDefault();
        //here should dispatch method from redux handling sending data to server
        const challengeData = {
            userId: this.props.userId,
            activity: this.state.randomActivity.label,
        }
        this.props.onAddChallenge(challengeData, this.props.token);
        this.setState({
            showSuccessModal: false,
        })
    }
      
    goToCatalogHandler = () => {
        this.props.history.push({
            pathname: '/catalog',
        })
    }
    showSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: true,
            randomActivity: activities[random]
        })
    }
    hideSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: false
        })
    }


    render () {
        
        let addChallenge = null;
        if (this.props.isAuthenticated) {
            addChallenge = <Button size="small" colorType="white" clicked={this.addChallengeHandler}>
            Add to your challenges
            </Button>
        }

        return (
            <React.Fragment>
                <Modal
                    show={this.state.showSuccessModal}
                    hideModal={this.hideSuccessModalHandler}
                    modalType="white"
                    >
                    Your challenge is: <br></br><br></br>
                    <p><strong>{this.state.randomActivity.label}</strong></p><br></br>
                    <p style={{fontSize: '1rem'}}>Tag us on social media:<br></br>
                    <i>#imbored #imboredchallenge</i> <br></br><br></br>
                    Share your challenge at: <br></br>
                    Facebook, Instagram, Twitter or wherever you like</p>
                    <div style={{display: 'flex', flexDirection: "column", marginTop: '30px'}}>
                    {addChallenge}
                    <Button size="small" colorType="white" clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button size="small"  colorType="white" clicked={() => window.location.reload(false)}>Try again</Button>
                    </div>

                </Modal>
                

                {/*<RandomActivity show={this.state.showSuccessModal}
                    hideModal={this.hideSuccessModalHandler}
                    
                    />
*/}
                <div className={classes.Conversation}>
                    <div className={classes.introductionContainer}>
                        <div>
                            <p className={classes.title}>I'M SO<br></br>BORED!</p>
                            <p className={classes.description}>Then do something! Here you will find many challenges that may inspire you to start a new hobby or activity. <br></br>Take a challenge. <br></br>Join today!</p>
                            <div className={classes.DesktopButtonsContainer}>
                                <Button 
                                size="small"
                                colorType="green"
                                clicked={this.showSuccessModalHandler}
                                >Challenge for you</Button>
                                <Button
                                size="small"
                                colorType="green"
                                clicked={this.goToCatalogHandler}
                                >Catalog of challenges</Button>
                            </div>
                        </div>
                        <div style={{minWidth: "350px" }}><img src={image} width="90%" alt="Bored women looking at the phone"/></div>
                    </div>
                    <div className={classes.MobileButtonsContainer}>
                        <Button 
                            size="smallLong"
                            colorType="green"
                            clicked={this.showSuccessModalHandler}
                            >Challenge for you</Button>
                        <Button
                            size="smallLong"
                            colorType="green"
                            clicked={this.goToCatalogHandler}
                        >Catalog of challenges</Button>
                    </div> 
                 </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.challenge.loading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddChallenge: (challengeData, token) => dispatch(actions.addChallenge(challengeData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
