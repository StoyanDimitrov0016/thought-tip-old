import styled from "styled-components";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainContainer = styled.main`
  padding-top: 70px;
`;

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Sidebar />
    </>
  );
};

export default SidebarLayout;
