import styled from '@emotion/styled';

const StyledExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Example = styled.h1`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 2rem;
`;

const ExmapleComponent = () => {
  return (
    <StyledExample>
      <Example>React with Emotion</Example>
    </StyledExample>
  );
};

export default ExmapleComponent;
