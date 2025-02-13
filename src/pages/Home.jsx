import ExampleComponent from 'components/ExampleComponent';
import styled from '@emotion/styled';

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #000;
`;

const Home = () => {
  return (
    <StyledHome>
      <ExampleComponent />
    </StyledHome>
  );
};

export default Home;
