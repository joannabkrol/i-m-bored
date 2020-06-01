import React, {Component} from 'react';

import TalkBubble from '../../Components/UI/TalkBubble/TalkBubble';
import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './Home.module.css';

//graphic elements:
import leaves from '../../assets/SVG/Asset 1.svg';
import LeftTriangle from '../../assets/SVG/Asset 5.svg';
import RightTriangle from '../../assets/SVG/Asset 4.svg';
import CentreTriangle from '../../assets/SVG/Asset 3.svg';

import {activities} from '../../data/activitiesList';

const random = Math.floor(Math.random() * Math.floor(activities.length));

class Home extends Component {
    state = {
        //showActivity: false,
        showSuccessModal: false,
        showFailModal: false,
        randomActivity: { label: '', category: '' },
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
        return (
            <React.Fragment>
                <img className={classes.GraphicRight} src={leaves} alt="leaves shape" />
                <img className={classes.GraphicLeft} src={LeftTriangle} alt="green triangle shape" />
                <img className={classes.GraphicRightBottom} src={RightTriangle} alt="yellow triangle shape" />
                <img className={classes.GraphicCentreBottom} src={CentreTriangle} alt="yellow triangle shape" />
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
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '30px'}}>
                    <Button size="small" colorType="whitep" clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button size="small"  colorType="whitep" clicked={() => window.location.reload(false)}>Try again</Button>
                    </div>

                </Modal>
                
                <div className={classes.Conversation}>
                    <TalkBubble position="left" colorType="primary">I'm bored!!!</TalkBubble>
                    <TalkBubble position="right" colorType="secondary">Then do something!</TalkBubble>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                        <Button 
                            size="primary"
                            colorType="yellow"
                            clicked={this.showSuccessModalHandler}
                            >Click here to see a challenge for you</Button>
                        <Button
                            size="primary"
                            colorType="yellow"
                            clicked={this.goToCatalogHandler}
                        >Click here to see catalog of challenges</Button>
                    </div> 
                 </div>
            </React.Fragment>
        )
    }
}
export default Home;