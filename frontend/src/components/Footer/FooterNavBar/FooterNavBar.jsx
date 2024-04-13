import { FooterNavBarContainer } from "./FooterNavBar.styles";
import { footerPaths } from "../../../paths/footerPaths";
import FooterNavSection from "./FooterNavSection";

const FooterNavBar = () => {
  return (
    <FooterNavBarContainer>
      {footerPaths.map((section) => (
        <FooterNavSection key={section.category} section={section} />
      ))}
    </FooterNavBarContainer>
  );
};
export default FooterNavBar;
