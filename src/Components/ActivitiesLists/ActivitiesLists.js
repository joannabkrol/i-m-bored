import React, { Component } from 'react';
import ActivityItem from './ActivityItem/ActivityItem';
import classes from './ActivitiesLists.module.css';

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
