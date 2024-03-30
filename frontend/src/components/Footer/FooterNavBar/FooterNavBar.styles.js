import styled from "styled-components";

export const FooterNavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 7em;
  width: 80%;

  @media (width < 900px) {
    gap: 3em;
  }

  h3,
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    color: var(--text);
  }

  ul li {
    list-style: none;
  }

  li a {
    color: var(--text);
  }
  li a:hover {
    color: var(--accent);
  }
`;
