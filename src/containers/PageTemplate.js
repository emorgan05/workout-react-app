import React from 'react';
import PageContainer from './PageContainer';
import PageContent from './PageContent';

const PageTemplate = (props) => {
  return (
    <PageContainer>
      <PageContent displayBlock={'flex'}>{props.children}</PageContent>
    </PageContainer>
  )
}

export default PageTemplate;
