import styled, { createGlobalStyle } from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const GlobalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eff0ef;
  /* Example media query */
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const MainLayout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      <GlobalStyle />
      <GlobalContainer>
        {showHeader && <Header />}
        {children}
        {showFooter && <Footer />}
      </GlobalContainer>
    </>
  );
};

export default MainLayout;
