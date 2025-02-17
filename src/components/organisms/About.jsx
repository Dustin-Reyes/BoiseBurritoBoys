import styled from '@emotion/styled';

const PageWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme, gradientStart }) =>
      theme.colors[gradientStart] || theme.colors.orange},
    ${({ theme, gradientEnd }) => theme.colors[gradientEnd] || theme.colors.red}
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  padding: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  letter-spacing: 0.1rem;
`;
const Constainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
`;

const StyledTitle = styled.h1`
  font-family: 'modak', cursive;
  font-size: 8rem;
  color: #fff;
  margin: 0;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.4rem;
`;

const StyledParagraph = styled.p`
  font-family: 'modak', cursive;
  font-size: 2.3rem;
  color: #fff;
  margin-top: 1rem;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: -0.1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const StyledImage = styled.img`
  height: 30rem;
  width: 40rem;
  margin-right: 20rem;
  border-radius: 10%;
  border: 0.5rem solid black;
`;

const About = () => {
  return (
    <PageWrapper>
      <TextContainer>
        <Constainer>
          <StyledTitle>ABOUT US</StyledTitle>
          <StyledParagraph>
            At Boise Burrito Boys, we believe every great day starts with two
            things: A killer burrito and a contagious smile. Founded by two guys
            with a passion for good food and meeting people, we’re up at the
            crack of dawn rolling up the best breakfast burritos in town—served
            fresh, fast, and with a side of positivity. Whether youre on the go
            or kicking back, we’re here to start your morning right. Because
            around here, it’s not just about the burritos—it’s about the people!
          </StyledParagraph>
        </Constainer>
      </TextContainer>
      <ImageContainer>
        <StyledImage
          src="https://img.freepik.com/free-photo/young-male-cook-wearing-chef-uniform-holding-ladle-frying-pan-isolated-green-wall-with-copy-space_141793-36754.jpg"
          alt="BBB Owners"
          aria-label="BBB Owners"
          loading="lazy"
        />
      </ImageContainer>
    </PageWrapper>
  );
};

export default About;
