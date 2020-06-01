import React, { Component } from 'react';
import ActivityItem from './ActivityItem/ActivityItem';
import classes from './ActivitiesLists.module.css';

import {activities} from '../../data/activitiesList';


class ActivitiesLists extends Component {
    render () { 
        return (
            <React.Fragment>
                {this.props.selectedCategory ? 
                (<div className={classes.Header}>
                    <p>
                        Activities: {Array.isArray(this.props.selectedCategory) ? 'All' : this.props.selectedCategory }
                    </p>
                </div>) : null
                }

                <div className={classes.ActivityList}>

                {activities.map((activity, i) => {
                    if(Array.isArray(this.props.selectedCategory)) {
                        return (
                            <ActivityItem 
                        key={i}
                        label={activity.label}
                    />
                        )
                    } 
                    if (activity.category === this.props.selectedCategory)
                    {
                        return (
                            <ActivityItem 
                        key={i}
                        label={activity.label}
                    />
                        )
                    }
                })}
                    
                </div>
            </React.Fragment>            
        )
    }
}

export default ActivitiesLists;
