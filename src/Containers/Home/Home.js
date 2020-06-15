import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import classes from './Home.module.css';

import image from '../../assets/1x/boredwomen.png';

import RandomActivity from '../../Components/RandomActivity/RandomActivity';


class Home extends Component {
    state = {
        showSuccessModal: false,
    }
    
    showSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: true,
        })
        this.props.onGenerateRandomChallenge();
    }
    hideSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: false
        })
    }


    render () {
        return (
            <React.Fragment>
                <RandomActivity show={this.state.showSuccessModal}
                    hideModal={this.hideSuccessModalHandler}
                    randomActivity={this.props.randomChallenge}
                    />
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
        randomChallenge: state.randomChallenge.randomChallenge,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddChallenge: (challengeData, token) => dispatch(actions.addChallenge(challengeData, token)),
        onGenerateRandomChallenge: () => dispatch(actions.generateRandomChallenge())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
