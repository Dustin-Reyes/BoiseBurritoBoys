import styled from '@emotion/styled';

const PageWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme, gradientStart }) =>
      theme.colors[gradientStart] || theme.colors.orange},
    ${({ theme, gradientEnd }) =>
      theme.colors[gradientEnd] || theme.colors.fuchsia}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 2rem 0;
`;

const SubTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 50rem;
  width: 50rem;
`;

const Hero = () => {
  return (
    <PageWrapper>
      <Title>BOISE</Title>
      <ImageContainer>
        <StyledImage
          src="https://png.pngtree.com/png-clipart/20240707/original/pngtree-cute-burrito-mascot-carrying-a-skateboard-png-image_15513101.png"
          alt="BBB Logo"
          aria-label="BBB Logo"
          loading="lazy"
        />
      </ImageContainer>
      <SubTitle>BURRITO BOYS</SubTitle>
    </PageWrapper>
  );
};

export default Hero;
