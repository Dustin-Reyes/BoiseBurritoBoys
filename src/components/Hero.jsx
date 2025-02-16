import styled from '@emotion/styled';

const PageWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme, gradientStart }) =>
      theme.colors[gradientStart] || theme.colors.orange},
    ${({ theme, gradientEnd }) => theme.colors[gradientEnd] || theme.colors.red}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'modak', cursive;
  font-size: 12rem;
  color: #fff;
  margin: 2rem 0;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.4rem;
`;

const TitleTwo = styled.h1`
  font-family: 'modak', cursive;
  font-size: 12rem;
  color: #fff;
  margin: 2rem 0;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Line = styled.div`
  width: 20rem;
  height: 0.5rem;
  background-color: white;
`;

const DescriptionOne = styled.p`
  font-family: 'modak', cursive;
  font-size: 5rem;
  color: #fff;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.2rem;
  text-align: right;
`;

const DescriptionTwo = styled.p`
  font-family: 'modak', cursive;
  font-size: 5rem;
  color: #fff;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.2rem;
  text-align: left;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledImage = styled.img`
  height: 50rem;
  width: 50rem;
`;

const Hero = () => {
  return (
    <PageWrapper>
      <Title>BOISE</Title>
      <ContentWrapper>
        <DescriptionWrapper>
          <Line />
          <DescriptionOne>Fresh</DescriptionOne>
          <Line />
        </DescriptionWrapper>
        <ImageContainer>
          <StyledImage
            src="https://png.pngtree.com/png-clipart/20240707/original/pngtree-cute-burrito-mascot-carrying-a-skateboard-png-image_15513101.png"
            alt="BBB Logo"
            aria-label="BBB Logo"
            loading="lazy"
          />
        </ImageContainer>
        <DescriptionWrapper>
          <Line />
          <DescriptionTwo>Delicious</DescriptionTwo>
          <Line />
        </DescriptionWrapper>
      </ContentWrapper>
      <TitleTwo>BURRITO BOYS</TitleTwo>
    </PageWrapper>
  );
};

export default Hero;
