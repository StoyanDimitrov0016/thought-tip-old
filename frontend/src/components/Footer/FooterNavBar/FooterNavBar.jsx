import { FooterNavBarContainer } from "./FooterNavBar.styles";
import { footerLinks } from "../../../constants";
import FooterNavSection from "./FooterNavSection";

const FooterNavBar = () => {
  return (
    <FooterNavBarContainer>
      {footerLinks.map((section) => (
        <FooterNavSection key={section.category} section={section} />
      ))}
    </FooterNavBarContainer>
  );
};
export default FooterNavBar;
