import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArticleContainer = styled.article`
  display: block;
  margin: 1em auto;
  max-width: 50em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 1em;
`;

export const HeaderContainer = styled.header`
  padding: 1em;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }

  h2 {
    font-size: 2em;
    color: var(--text);
  }

  a:hover {
    text-decoration: none;
  }
`;

export const SectionContainer = styled.section`
  padding: 1em;
  background-color: var(--secondary);
`;

export const FooterContainer = styled.footer`
  padding: 1em;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--primary);

    &:hover {
      /* background-color: var(--secondary); */
      color: var(--accent);
    }
  }
`;

export const CustomLink = styled(Link)`
  color: var(--text);

  &:hover {
    text-decoration: none;
  }
`;
