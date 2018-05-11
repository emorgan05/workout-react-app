import React from 'react';
import styled from 'styled-components';
import PageTemplate from './PageTemplate';

const Button = styled.button`
  border-radius: 5px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #FC6618;
  border: 4px solid #FC6618;
  font-size: 2em;
`;

const HomePageContainer = () => {
  return (
    <PageTemplate>
      <div>
        <Button>Learn More</Button>
        <Button>Choose a Category</Button>
        <Button>Start</Button>
      </div>
    </PageTemplate>
  )
};

export default HomePageContainer;
