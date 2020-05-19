import React, {Component} from 'react';

import TalkBubble from '../../Components/UI/TalkBubble/TalkBubble';
import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './Home.module.css';

const activities = [
    { label: 'Read a book', category: 'home' },
    { label: 'Paint a tree', category: 'home' },
    { label: 'Cook a soup', category: 'home' },
    { label: 'Take a walk', category: 'outside' },
    { label: 'Read a book', category: 'home' },
    { label: 'Paint a tree', category: 'home' },
    { label: 'Cook a soup', category: 'home' },
    { label: 'Take a walk', category: 'outside' },
];

const random = Math.floor(Math.random() * Math.floor(activities.length));

class Home extends Component {
    state = {
        showActivity: false,
        showSuccessModal: false,
        showFailModal: false,
        randomActivity: { label: 'Test', category: 'test' },
    }
      
    //componentDidMount() {
    //this.scrollToBottom();
    //}
    /*
    componentDidUpdate() {
    this.scrollToBottom();
    }
*/
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }

    goToCatalogHandler = () => {
        this.props.history.push({
            pathname: '/catalog',
        })
    }
    showSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: true,
        })
    }
    hideSuccessModalHandler = () => {
        this.setState({
            showSuccessModal: false
        })
    }
    showFailModalHandler = () => {
        this.setState({
            showFailModal: true,
        })
    }
    hideFailModalHandler = () => {
        this.setState({
            showFailModal: false,
        })
    }
    showRandomActivityHandler = () => {
        this.setState({
            showActivity: true,
            randomActivity: activities[random]
        }, () => this.scrollToBottom());
    }

    render () {
        return (
            <React.Fragment>
                <Modal
                    show={this.state.showSuccessModal}
                    hideModal={this.hideSuccessModalHandler}
                    modalType="success"
                    >
                    This is success Modal.
                    <br></br>
                    Your random activity is: <br></br>
                    {this.state.randomActivity.label}<br></br>
                    Enjoy! <br></br>
                    Share your challenge at: <br></br>
                    FB, Insta, Twitter,
                </Modal>
                <Modal
                    show={this.state.showFailModal}
                    hideModal={this.hideFailModalHandler}
                    modalType="fail"
                    >
                    <p style={{marginBottom: '20%'}}>Find more activities in our Catalog:</p>
                    <Button clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button clicked={() => window.location.reload(false)}>Try again</Button>
                </Modal>
                <div className={classes.Conversation}>
                    <TalkBubble position="left">I'm bored</TalkBubble>
                    <TalkBubble position="right">Then do something!</TalkBubble>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                        <Button 
                            clicked={this.showRandomActivityHandler}
                            >Click here for random activity</Button>
                        <Button
                            clicked={this.goToCatalogHandler}
                        >Click here to see catalog of activities</Button>
                    </div>  
                    {this.state.showActivity ? 
                        <React.Fragment>
                            <TalkBubble position="right">Activity for you is:</TalkBubble>
                            <TalkBubble position="right" size="big" colorType="secondary">
                                <span>{this.state.randomActivity.label}</span><br></br>
                                Category: {this.state.randomActivity.category}
                            </TalkBubble>
                            <div style={{display: 'flex'}}>
                                <Button clicked={this.showFailModalHandler}>I don't like it.</Button>
                                <Button clicked={this.showSuccessModalHandler}> Yeah, good idea.</Button>
                            </div>
                        </React.Fragment>
                    : null}
                    <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}></div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home