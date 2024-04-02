import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--background);
  color: var(--text);

  hr {
    width: 100%;
    background-color: var(--text);
    margin-bottom: 2em;
  }
`;
