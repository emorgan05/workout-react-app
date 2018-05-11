import React from 'react';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import HomePageContainer from './HomePageContainer';

const PageTemplate = (props) => {
  return (
    <PageContainer>
      <PageContent displayBlock={'block'}>{props.children}</PageContent>
    </PageContainer>
  )
}

export default PageTemplate;
