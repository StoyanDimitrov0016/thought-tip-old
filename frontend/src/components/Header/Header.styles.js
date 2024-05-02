import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--background);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 100vw;

  hr {
    color: var(--text);
    width: 100%;
  }
`;
