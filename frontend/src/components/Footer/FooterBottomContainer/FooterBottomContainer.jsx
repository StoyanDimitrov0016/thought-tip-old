import { FooterBottomContainerStyled } from "./FooterBottomContainer.styles";
import { applicationName, currentYear } from "../../../constants";

const FooterBottomContainer = () => {
  return (
    <FooterBottomContainerStyled>
      &copy; {currentYear} {applicationName}
    </FooterBottomContainerStyled>
  );
};

export default FooterBottomContainer;
