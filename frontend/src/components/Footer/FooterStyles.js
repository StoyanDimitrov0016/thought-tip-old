import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0d0d0d;
  color: #eff0f3;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 10em;
  min-height: 60px;
  align-items: center;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const FooterListItem = styled.li`
  margin-right: 20px;
  list-style: none;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #eff0f3;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;

  &:hover {
    color: #d3d3d3;
  }
`;

export const CopyrightParagraph = styled.p`
  font-size: 0.8rem;
  color: #a0a0a0;
  margin: 0;
`;
