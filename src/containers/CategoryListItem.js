import React from 'react';

const CategoryListItem = ({key, category}) => {
  return (
    <li><button>{category.title}</button></li>
  );
}

export default CategoryListItem;
