import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import './Home.css';

import image from '../../assets/1x/boredwomen.png';

import RandomActivityModal from '../../Components/RandomActivityModal/RandomActivityModal';


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
    goToCatalogHandler = () => {
        this.props.history.push("/catalog");
    }

    render () {
        return (
            <React.Fragment>
                <RandomActivityModal show={this.state.showSuccessModal}
                    hideModal={this.hideSuccessModalHandler}
                    randomActivity={this.props.randomChallenge}
                    />
                <div className='Container'>
                    <div className='Container-Introduction'>
                        <div>
                            <p className='Container-Title'>I'M SO<br></br>BORED!</p>
                            <p className='Container-Description'>Then do something! Here you will find many challenges that may inspire you to start a new hobby or activity. <br></br>Take a challenge. <br></br>Join today!</p>
                            <div className='Container-Btn_desktop'>
                                <Button 
                                size="Button_small"
                                colorType="Button_green"
                                clicked={this.showSuccessModalHandler}
                                >Challenge for you</Button>
                                <Button
                                size="Button_small"
                                colorType="Button_green"
                                clicked={this.goToCatalogHandler}
                                >Catalog of challenges</Button>
                            </div>
                        </div>
                        <div className='Container-Image'><img src={image} width="90%" alt="Bored women looking at the phone"/></div>
                    </div>
                    <div className='Container-Btn_mobile'>
                        <Button 
                            size="Button_smallLong"
                            colorType="Button_green"
                            clicked={this.showSuccessModalHandler}
                            >Challenge for you</Button>
                        <Button
                            size="Button_smallLong"
                            colorType="Button_green"
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
