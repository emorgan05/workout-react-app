import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  render() {
    return (
      <PageTemplate>
        <div>
          <Link to="/learn-more" exact="true"><Button>Learn More</Button></Link>
          <Button>Choose a Category</Button>
          <Button>Start</Button>
        </div>
      </PageTemplate>
    )
  }
};

export default HomePageContainer;
