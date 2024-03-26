import styled from "styled-components";

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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    
    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  a {
    color: #eff0f3;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #d3d3d3;
    }
  }

  p {
    font-size: 0.8rem;
    color: #a0a0a0;
    margin: 0;
  }
`;
