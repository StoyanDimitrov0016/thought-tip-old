import styled from "styled-components";
import MainNavigationBar from "./MainNavigationBar";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d0d0d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <MainNavigationBar />
    </HeaderStyled>
  );
};

export default Header;
