import React, { Component } from 'react';

class CategoriesList extends Component {
  render() {
    const CategoriesListItem = this.props.categories.map((category, index) => {
      return (
        <CategoryListItem
          key={index}
          category={category}
        />
      )
    });

    return(
      <CategoriesListItem />
    )
  }
}

export default CategoriesList;
