import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.red};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const FooterTitle = styled.p`
  font-family: 'modak', cursive;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 2rem 0;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: 0.1rem;
`;
const FooterScroll = styled.p`
  font-family: 'modak', cursive;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
  margin: 2rem 0;
  -webkit-text-stroke: 0.2rem black;
  letter-spacing: 0.01rem;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>BBB</FooterTitle>
      <FooterScroll>BACK TO TOP</FooterScroll>
    </FooterWrapper>
  );
};

export default Footer;
