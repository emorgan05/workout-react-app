import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageTemplate from './PageTemplate';
import LearnMoreContainer from './LearnMoreContainer';

const Button = styled.button`
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #FC6618;
  border: 4px solid #FC6618;
  font-size: 2em;
`;

class HomePageContainer extends Component {
  handleCategoryClick = (event) => {
    event.preventDefault();
    this.props.fetchCategories();
    this.props.history.push('/categories');
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.createHabit(this.state);
  //   this.setState({
  //     name: '',
  //     description: '',
  //     number_of_days: '',
  //     category_id: '',
  //     stars: [{}, {}, {}, {}, {}, {}, {}]
  //   });
  //   this.props.history.push('/habits');
  // }

  render() {
    return (
      <PageTemplate>
        <div>
          <Link to="/learn-more" exact="true"><Button>Learn More</Button></Link>
          <Button onClick={this.handleCategoryClick} >Choose a Category</Button>
          <Button>Start</Button>
        </div>
      </PageTemplate>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: bindActionCreators(fetchCategories, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HomePageContainer);
