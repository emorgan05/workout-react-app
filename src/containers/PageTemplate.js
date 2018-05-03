import React from 'react';
import PageContainer from './PageContainer';
import PageContent from './PageContent';
import HomePageContainer from './HomePageContainer';

const PageTemplate = () => {
  return (
    <PageContainer>
      <PageContent>
        <HomePageContainer />
      </PageContent>
    </PageContainer>
  )
}

export default PageTemplate;
