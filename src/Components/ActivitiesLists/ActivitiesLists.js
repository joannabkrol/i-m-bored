import React, { Component } from 'react';
import Aux from '../../Hoc/Aux/Aux';
import ActivityItem from './ActivityItem/ActivityItem';
import classes from './ActivitiesLists.module.css';

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

class ActivitiesLists extends Component {
    render () {
        return (
            <Aux>
                {this.props.selectedCategory ? 
                (<div className={classes.Header}>
                    <p>
                        Activities: {this.props.selectedCategory}
                    </p>
                </div>) : null
                }

                <div className={classes.ActivityList}>
                {activities.map((activity, i) => {
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
            </Aux>            
        )
    }
}

export default ActivitiesLists;
