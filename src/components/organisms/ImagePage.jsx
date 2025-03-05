import styled from '@emotion/styled';

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePage = () => {
  return <PageWrapper></PageWrapper>;
};

export default ImagePage;
