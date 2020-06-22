import React, {Component} from 'react';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';



class RandomActivity extends Component {
    state = {
    }

    addChallengeHandler = (event) => {
        event.preventDefault();
        const challengeData = {
            userId: this.props.userId,
            activity: this.props.randomChallenge.label,
        }
        if (this.props.isAuthenticated) {
            this.props.onAddChallenge(challengeData, this.props.token);
        } else {
            this.props.onSetAuthRedirectPath('/user');
            window.location.href = '/signin';
        }
        
    }
    reloadPage = () => {
        //window.location.reload();
        this.props.onGenerateRandomChallenge();
    }

    goToCatalogHandler = () => {
        window.location.href = '/catalog'
    }

    render() {
        let addChallenge = <Button size="Button_small" colorType="Button_white" clicked={this.addChallengeHandler}>
        {this.props.isAuthenticated ? "Add to your challenges" : "Sign in to see more options"}
        </Button>;
        
        return (
                <Modal style={{overflowY: "scroll"}}
                    show={this.props.show}
                    hideModal={this.props.hideModal}
                    modalType="Modal_white"
                    >
                    Your challenge is: <br></br><br></br>
                    <p><strong>{this.props.randomChallenge.label}
                    
                    </strong></p><br></br>
                    <p style={{fontSize: '1rem'}}>Tag us on social media:<br></br>
                    <i>#imbored #imboredchallenge</i> <br></br><br></br>
                    Share your challenge at: <br></br>
                    Facebook, Instagram, Twitter or wherever you like</p>
                    <div style={{display: 'flex', flexDirection: "column", marginTop: '30px'}}>
                    {addChallenge}
                    <Button size="Button_small" colorType="Button_white" clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button size="Button_small"  colorType="Button_white" clicked={this.reloadPage}>Try again</Button>
                    </div>

                </Modal>
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
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
        onGenerateRandomChallenge: () => dispatch(actions.generateRandomChallenge())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RandomActivity);