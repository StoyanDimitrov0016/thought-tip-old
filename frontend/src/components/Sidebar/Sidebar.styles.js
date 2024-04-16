import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 250px;
  position: fixed;
  right: 0;
  top: 5em;
  padding: 20px;
  overflow-y: auto;
  background-color: var(--secondary);
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 2px solid black;
  flex-direction: column;

  button {
    background-color: orange;
  }

  h3,
  p {
    color: var(--text);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li a {
    text-decoration: none;
  }
  li {
    margin: 1em;
  }
`;

export const SidebarClosed = styled.div`
  position: absolute;
  top: 5em;
  right: 0.5em;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--text);
  width: 2.5em;
  height: 2.5em;
  border-radius: 3px;
  z-index: 2;

  span {
    height: 0.4em;
    width: 100%;
    background-color: white;
    border-radius: 0.2em;
  }
`;
