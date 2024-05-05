import styled from "styled-components";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MainStyled = styled.main`
  margin: 100px;
`;

const FooterLayout = ({ children }) => {
  return (
    <GlobalContainer>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </GlobalContainer>
  );
};

export default FooterLayout;
