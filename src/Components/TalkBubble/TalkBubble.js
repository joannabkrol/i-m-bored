import React from 'react';
import './TalkBubble.css';

/*
Size(Hight, width)
Color-font
color background
position
*/

const talkBubble = (props) => {
    return (
        <div className={`${props.position} ${props.size} ${props.colorType} talkBubble`}>
            <p>{props.children}</p>
        </div>
    )
};

export default talkBubble;
