import React, { Component } from 'react';
import ActivityContainer from '../UI/ActivityContainer/ActivityContainer';
import './ActivitiesLists.css';

import {activities} from '../../data/activitiesList';


class ActivitiesLists extends Component {
    render () { 
        return (
            <React.Fragment>
                {this.props.selectedCategory ? 
                (<div className='ActivityList-Header'>
                    <p>
                        Activities: {Array.isArray(this.props.selectedCategory) ? 'All' : this.props.selectedCategory }
                    </p>
                </div>) : null
                }

                <div className='ActivityList'>

                {activities.map((activity, i) => {
                    if(Array.isArray(this.props.selectedCategory)) {
                        return (
                            <ActivityContainer key={i} containerStyle="ActivityContainer-Activity" colorStyle="whiteOnWhite">{activity.label}</ActivityContainer>
                       
                        )
                    } 
                    if (activity.category === this.props.selectedCategory)
                    {
                        return (
                            <ActivityContainer key={i} containerStyle="ActivityContainer-Activity" colorStyle="whiteOnWhite">{activity.label}</ActivityContainer>
                        )
                    }
                    return null;
                })}
                    
                </div>
            </React.Fragment>            
        )
    }
}

export default ActivitiesLists;
