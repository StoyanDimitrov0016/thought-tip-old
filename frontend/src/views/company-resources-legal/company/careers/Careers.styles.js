import styled from "styled-components";

export const CareersSection = styled.section`
  background: var(--background);
  color: var(--text);
  padding: 1.25em;
  margin-top: 1.25em;
  border-radius: 0.625em;
`;

export const Header = styled.h1`
  color: var(--primary);
`;

export const Text = styled.p`
  margin: 0.625em 0;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0.3125em 0;
`;

export const Button = styled.button`
  background: var(--accent);
  color: white;
  border: none;
  padding: 0.625em 0.9375em;
  margin: 2em;
  border-radius: 0.3125em;
  cursor: pointer;

  &:hover {
    background: darken(var(--accent), 10%);
  }
`;
