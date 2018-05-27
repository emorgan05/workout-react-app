import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

class CategoriesList extends Component {
  componentDidMount() {
    const CategoriesList = this.props.categories.map((category, index) => {
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
      <CategoriesList />
    )
  }
}

export default CategoriesList;
