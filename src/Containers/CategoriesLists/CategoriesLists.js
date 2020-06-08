import React, { Component } from 'react';
import ActivitiesLists from '../../Components/ActivitiesLists/ActivitiesLists';
import ActivityContainer from '../../Components/UI/ActivityContainer/ActivityContainer';
import classes from './CategoriesLists.module.css';
import Button from '../../Components/UI/Button/Button';

//graphic elements:
import LeftTriangle from '../../assets/SVG/Asset 5.svg';

import {categories} from '../../data/activitiesList';

class CategoriesList extends Component {
    state = {
        selectedCategory: null
    }
    scrollToActivities = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    handleSelect = (category) => {
        this.setState({
            selectedCategory: category
        }, () => this.scrollToActivities())
    }

    handleSelectAll = () => {
        this.setState({
            selectedCategory: categories
        }, () => this.scrollToActivities())
    }

    

    render () {
        return (
            <React.Fragment>
                <img className={classes.GraphicLeft} src={LeftTriangle} alt="green triangle shape" />
                <div className={classes.Header}>Welcome to the biggest catalog of <br></br>activities of all kinds</div>
                <Button position="center" size="smallLong" colorType="yellow" clicked={this.handleSelectAll}>See all</Button>
                <p className={classes.Header}>Or borwse by category:</p>
                <div className={classes.CategoryList}>
                {categories.map((cat, i) => (
                    <ActivityContainer key={i} containerStyle="Category" colorStyle="Yellow" clicked={() => this.handleSelect(cat)}>{cat}</ActivityContainer>
                ))}
                </div>
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>  
                </div> 
                <ActivitiesLists selectedCategory={this.state.selectedCategory} />    
            </React.Fragment>
        )
    }
}

export default CategoriesList;