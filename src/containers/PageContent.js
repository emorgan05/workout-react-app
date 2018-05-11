import styled from 'styled-components';

const PageContent = styled.div`
  margin-left: 20px;
  margin-top: 100px;
  padding: 2rem;
  display: ${props => (props.displayBlock ? 'block' : 'flex')};
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  min-height: calc(100vh - 164px);
  border: 3px solid #FC6618;
  border-radius: 20px;
`;

export default PageContent;
