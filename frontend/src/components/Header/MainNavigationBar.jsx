import React, { useState } from "react";
import styled from "styled-components";
import endpoints from "../../../endpoints";
import { Link } from "react-router-dom";

const MainNavigationBarStyled = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eff0f3;

  & ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    list-style: none;
  }

  & li {
    cursor: pointer;
    text-decoration: none;
  }

  & li a {
    color: inherit;
    text-decoration: none;
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  animation: fadeIn 0.3s ease-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const NestedListItem = styled.li`
  padding: 5px 0;
`;

const MainNavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <MainNavigationBarStyled>
      <ul>
        <li>
          <Link to={endpoints.HOME}>Home</Link>
        </li>
        <li>
          <Link to={endpoints.NOTIFICATIONS}>User Notifications</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_UP}>Sign Up</Link>
        </li>
        <li onClick={toggleDropdown}>
          <span>User Profile</span>
          <MainNavDropdownMenu isDropdownOpen={isDropdownOpen} />
        </li>
      </ul>
    </MainNavigationBarStyled>
  );
};

const MainNavDropdownMenu = ({ isDropdownOpen }) => {
  return (
    isDropdownOpen && (
      <DropdownMenu>
        <NestedListItem>
          <Link to={endpoints.PREFERENCES}>Preferences</Link>
        </NestedListItem>
        <NestedListItem>
          <Link to={endpoints.PROFILE}>Profile</Link>
        </NestedListItem>
      </DropdownMenu>
    )
  );
};

export default MainNavigationBar;
