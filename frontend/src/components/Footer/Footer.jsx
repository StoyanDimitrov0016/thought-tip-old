import endpoints from "../../../endpoints";
import {
  FooterContainer,
  FooterList,
  FooterListItem,
  StyledLink,
  CopyrightParagraph,
} from "./FooterStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <CopyrightParagraph>
        &copy; {currentYear} Thought Tip
      </CopyrightParagraph>
      <FooterList>
        <FooterListItem>
          <StyledLink to={endpoints.CONTACT}>Contact</StyledLink>
        </FooterListItem>
        <FooterListItem>
          <StyledLink to={endpoints.ABOUT}>About</StyledLink>
        </FooterListItem>
        <FooterListItem>
          <StyledLink to={endpoints.GETTING_STARTED}>
            Getting Started
          </StyledLink>
        </FooterListItem>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;