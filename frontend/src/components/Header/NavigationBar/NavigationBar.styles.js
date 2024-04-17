import styled from "styled-components";

export const NavigationBarContainer = styled.nav`
  width: 100%;
  height: 100%;
  background-color: var(--background);

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    padding: 0em 2em;
    margin-top: 1em;
    gap: 5em;
  }

  li {
    list-style: none;
    color: var(--text);
  }

  li img {
    height: auto;
    border-radius: 5px;
  }

  li a {
    display: block;
    color: var(--text);
  }
`;
