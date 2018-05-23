import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

class CategoriesList extends Component {
  componentDidMount() {
    const CategoriesListItem = this.props.categories.map((category, index) => {
      return (
        <CategoryListItem
          key={index}
          category={category}
        />
      )
    });
  }

  render() {
    return(
      <CategoriesListItem />
    )
  }
}

export default CategoriesList;
