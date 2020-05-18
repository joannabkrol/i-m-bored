import React, {Component} from 'react';

import TalkBubble from '../../Components/TalkBubble/TalkBubble';
import TalkBubbleLeft from '../../Components/TalkBubble/TalkBubbleLeft/TalkBubbleLeft';
import TalkBubbleRight from '../../Components/TalkBubble/TalkBubbleRight/TalkBubbleRight';
import Button from '../../Components/UI/Button/Button';
//import Spinner from '../../Components/UI/Spinner/Spinner';
import classes from './Home.module.css';

class Home extends Component {
    state = {
        showActivity: false,
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
    showRandomActivityHandler = () => {
        this.setState({
            showActivity: true,
        }, () => this.scrollToBottom());
    }
    render () {
        return (
            <div className={classes.Conversation}>
                <TalkBubble position="left">I'm bored</TalkBubble>
                <TalkBubble position="right">Then do something!</TalkBubble>
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                    <Button 
                        clicked={this.showRandomActivityHandler}
                        //value="randomActivity"
                        >Click here for random activity</Button>
                    <Button
                        clicked={this.goToCatalogHandler}
                    >Click here to see catalog of activities</Button>
                </div>  
                {this.state.showActivity ? 
                    <React.Fragment>
                        <TalkBubble position="right">Activity for you is:</TalkBubble>
                        <TalkBubble position="right" size="big" colorType="secondary">Random activity</TalkBubble>
                        <div style={{display: 'flex'}}>
                            <Button>I don't like it.</Button>
                            <Button>Yeah, good idea.</Button>
                        </div>
                    </React.Fragment>
                : null}
                <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        )
    }
}
export default Home