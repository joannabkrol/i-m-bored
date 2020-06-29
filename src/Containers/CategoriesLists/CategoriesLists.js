import React, { Component } from 'react';
import ActivitiesLists from '../../Components/ActivitiesLists/ActivitiesLists';
import ActivityContainer from '../../Components/UI/ActivityContainer/ActivityContainer';
import './CategoriesLists.css';
import Button from '../../Components/UI/Button/Button';

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
                <div className='Catalog-Header'>Welcome to the biggest catalog of <br></br>activities of all kinds</div>
                <Button position="Button_center" size="Button_smallLong" colorType="Button_greenOnGreen"  buttonType="Button" clicked={this.handleSelectAll}>See all</Button>
                <p className='Catalog-Header'>Or borwse by category:</p>
                <div className='Catalog-CategoryList'>
                {categories.map((cat, i) => (
                    <ActivityContainer key={i} containerStyle="ActivityContainer-Category" colorStyle="greenOnGreen" clicked={() => this.handleSelect(cat)}>{cat}</ActivityContainer>
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