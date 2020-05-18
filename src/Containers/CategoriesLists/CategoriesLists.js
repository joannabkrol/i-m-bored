import React, { Component } from 'react';
import Aux from '../../Hoc/Aux/Aux';
import ActivitiesLists from '../../Components/ActivitiesLists/ActivitiesLists';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import classes from './CategoriesLists.module.css';

const categories = ["home", "outside"];

class CategoriesList extends Component {
    state = {
        selectedCategory: null
    }

    handleSelect = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    render () {
        return (
            <Aux>
                <div className={classes.Header}>Categories</div>
                <div className={classes.CategoryList}>
                {categories.map((cat, i) => (
                    <CategoryItem category={cat} select={this.handleSelect} key={i}/>
                ))}
                </div>
                <ActivitiesLists selectedCategory={this.state.selectedCategory} />
            </Aux>
        )
    }
}

export default CategoriesList;