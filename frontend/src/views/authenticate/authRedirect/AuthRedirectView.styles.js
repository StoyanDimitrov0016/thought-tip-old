import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthRedirectNavContainer = styled.nav`
  background-color: var(--background);
  color: var(--text);
  padding: 1em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthRedirectStyledLink = styled(Link)`
  background-color: var(--primary);
  color: var(--text);
  text-decoration: none;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border-radius: 0.3em;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent);
  }
`;

export const AuthRedirectLinkText = styled.span`
  font-size: 1.1em;
`;