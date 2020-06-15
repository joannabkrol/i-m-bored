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
            activity: this.props.randomActivity.label,
        }
        this.props.onAddChallenge(challengeData, this.props.token);
    }
    reloadPage = () => {
        window.location.reload();
    }

    goToCatalogHandler = () => {
        window.location.href = '/catalog'
    }

    render() {
        let addChallenge = <Button size="small" colorType="white"> {/*clicked={}*/}
        Sign in to add the challenge
        </Button>;
        if (this.props.isAuthenticated) {
            addChallenge = <Button size="small" colorType="white" clicked={this.addChallengeHandler}>
            Add to your challenges
            </Button>
        };
        
        return (
                <Modal
                    show={this.props.show}
                    hideModal={this.props.hideModal}
                    modalType="white"
                    >
                    Your challenge is: <br></br><br></br>
                    <p><strong>{this.props.randomActivity.label}
                    
                    </strong></p><br></br>
                    <p style={{fontSize: '1rem'}}>Tag us on social media:<br></br>
                    <i>#imbored #imboredchallenge</i> <br></br><br></br>
                    Share your challenge at: <br></br>
                    Facebook, Instagram, Twitter or wherever you like</p>
                    <div style={{display: 'flex', flexDirection: "column", marginTop: '30px'}}>
                    {addChallenge}
                    <Button size="small" colorType="white" clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button size="small"  colorType="white" clicked={this.reloadPage}>Try again</Button>
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddChallenge: (challengeData, token) => dispatch(actions.addChallenge(challengeData, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RandomActivity);