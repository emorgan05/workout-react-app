import React, { Component } from 'react';
import connect from 'react-redux';
import PageTemplate from './PageTemplate';
import CategoriesList from './CategoriesList';

const CategoriesContainer = ({categories}) => {
  return (
    <PageTemplate>
      <CategoriesList categories={this.props.categories} />
    </PageTemplate>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(CategoriesContainer);
