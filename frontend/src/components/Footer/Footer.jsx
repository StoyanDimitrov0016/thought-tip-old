import { Link } from "react-router-dom";
import styled from "styled-components";
import endpoints from "../../../endpoints";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0d0d0d;
  color: #eff0f3;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 10em;
  min-height: 60px;
  align-items: center;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const FooterListItem = styled.li`
  margin-right: 20px;
  list-style: none;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #eff0f3;
  text-decoration: none;
  // Ensure it behaves inline for flex layout
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div>&copy; {currentYear} Thought Tip</div>
      <FooterList>
        <FooterListItem>
          <StyledLink to={endpoints.CONTACT}>Contact</StyledLink>
        </FooterListItem>
        <FooterListItem>
          <StyledLink to={endpoints.ABOUT}>About</StyledLink>
        </FooterListItem>
        <FooterListItem>
          <StyledLink to={endpoints.GETTING_STARTED}>Getting Started</StyledLink>
        </FooterListItem>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
