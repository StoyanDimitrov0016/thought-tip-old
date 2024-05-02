import { HeaderContainer } from "../article-preview-card/article-preview-card.styles";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationBar />
      <hr />
    </HeaderContainer>
  );
};

export default Header;
