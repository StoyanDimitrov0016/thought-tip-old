import { FooterContainer } from "./Footer.styles";
import FooterBottomContainer from "./FooterBottomContainer/FooterBottomContainer";
import FooterNavBar from "./FooterNavBar/FooterNavBar";

const Footer = () => {
  return (
    <FooterContainer>
      <hr />
      <FooterNavBar />
      <FooterBottomContainer />
    </FooterContainer>
  );
};

export default Footer;
