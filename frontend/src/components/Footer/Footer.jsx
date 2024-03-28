import { Link } from "react-router-dom";

import { FooterContainer } from "./Footer.styles";
import { applicationName, currentYear, footerLinks } from "../../constants";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {currentYear} {applicationName}
      </p>
      <ul>
        {footerLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </FooterContainer>
  );
};

export default Footer;
