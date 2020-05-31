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

const activities = [
{ label: 'Hiking', category: 'Sport' },
{ label: 'Camping', category: 'Outdoors' },
{ label: 'Archery', category: 'Sport' },
{ label: 'Canoeing', category: 'Sport' },
{ label: 'Kayaking', category: 'Sport' },
{ label: 'Jogging', category: 'Sport' },
{ label: 'Dancing', category: 'Sport' },
{ label: 'Salsa', category: 'Sport' },
{ label: 'Bouldering', category: 'Sport' },
{ label: 'Yoga', category: 'Sport' },
{ label: 'Pilates', category: 'Sport' },
{ label: 'Geocaching', category: 'Outdoors' },
{ label: 'Picnic', category: 'Outdoors' },
{ label: 'Growing Vegetables', category: 'Garden' },
{ label: 'Gardening', category: 'Garden' },
{ label: 'Bird Watching', category: 'Outdoors' },
{ label: 'Beekeeping', category: 'Garden' },
{ label: 'LARPing', category: 'Outdoors' },
{ label: 'Astronomy', category: 'Outdoors' },
{ label: 'Meteorology', category: 'Outdoors' },
{ label: 'Sightseeing', category: 'Travel' },
{ label: 'Planning a Trip', category: 'Travel' },
{ label: 'Cooking', category: 'At kitchen' },
{ label: 'Baking', category: 'At kitchen' },
{ label: 'Home Brewing', category: 'At home' },
{ label: 'Wine Making', category: 'At home' },
{ label: 'Bread Making', category: 'At kitchen' },
{ label: 'Cheese Making', category: 'At kitchen' },
{ label: 'Sewing', category: 'Handy crafts' },
{ label: 'Painting', category: 'Handy crafts' },
{ label: 'Origami', category: 'Handy crafts' },
{ label: 'Photography', category: 'At home' },
{ label: 'Scrapbooking', category: 'Handy crafts' },
{ label: 'Fotoalbum Making', category: 'At home' },
{ label: 'Calligraphy', category: 'At home' },
{ label: 'Quilting', category: 'Handy crafts' },
{ label: 'Crocheting', category: 'Handy crafts' },
{ label: 'Knitting', category: 'Handy crafts' },
{ label: 'Embroidery', category: 'Handy crafts' },
{ label: 'Jewelry Making', category: 'Handy crafts' },
{ label: 'Pottery', category: 'Handy crafts' },
{ label: 'Furniture Making', category: 'Handy crafts' },
{ label: 'Video Game', category: 'Games' },
{ label: 'Board Game', category: 'Games' },
{ label: 'Card Game', category: 'Games' },
{ label: 'Puzzles', category: 'Games' },
{ label: 'Chess', category: 'Games' },
{ label: 'Table Tennis', category: 'Sport' },
{ label: 'Billiards', category: 'Games' },
{ label: 'Karaoke', category: 'Games' },
{ label: 'Learning New Language', category: 'Skills' },
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
                    
                </Modal>
                <Modal
                    show={this.state.showFailModal}
                    hideModal={this.hideFailModalHandler}
                    modalType="white"
                    >
                    <p style={{marginBottom: '20%'}}>Find more activities in our Catalog:</p>
                    <Button size="primary" colorType="yellow" clicked={this.goToCatalogHandler}>Go to Catalog</Button>
                    <Button size="primary"  colorType="yellow" clicked={() => window.location.reload(false)}>Try again</Button>
                </Modal>
                <div className={classes.Conversation}>
                    <TalkBubble position="left" colorType="primary">I'm bored!!!</TalkBubble>
                    <TalkBubble position="right" colorType="secondary">Then do something!</TalkBubble>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                        <Button 
                            size="primary"
                            colorType="yellow"
                            clicked={this.showRandomActivityHandler}
                            >Click here to see a challenge for you</Button>
                        <Button
                            size="primary"
                            colorType="yellow"
                            clicked={this.goToCatalogHandler}
                        >Click here to see catalog of challenges</Button>
                    </div>  
                    {this.state.showActivity ? 
                        <React.Fragment>
                            <TalkBubble position="right" colorType="secondary">Challenge for you is:</TalkBubble>
                            <TalkBubble position="right" size="big" colorType="secondary">
                                <p style={{fontSize: "2rem", margin: "0"}}>{this.state.randomActivity.label}</p>
                                Category: {this.state.randomActivity.category}
                            </TalkBubble>
                            <div style={{display: 'flex'}}>
                                <Button colorType="yellow" size="primary" clicked={this.showFailModalHandler}>
                                    I don't like it.
                                </Button>
                                <Button colorType="yellow" size="primary" clicked={this.showSuccessModalHandler}> 
                                    Yeah, good idea.
                                </Button>
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