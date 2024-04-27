import { Link } from "react-router-dom";

import { NavigationBarContainer } from "./NavigationBar.styles";
import { useUserContext } from "../../../contexts/UserContext";
import allPaths from "../../../paths/allPaths";
import SearchBar from "../../forms/search-bar/SearchBar";

const NavigationBar = () => {
  const { user } = useUserContext();

  return (
    <NavigationBarContainer>
      <ul>
        <li>
          <Link to={allPaths.home}>
            <img src="/example-logo.png" alt="Home" />
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>

        {user ? (
          <>
            <li>
              <Link to={allPaths.userNotifications}>notifications</Link>
            </li>
            <li>
              <Link to={allPaths.createArticle}>create</Link>
            </li>
            <li>
              <Link to={"/my-profile/details"}>my profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={allPaths.authenticateRedirect}>Sign In/Up</Link>
          </li>
        )}
      </ul>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
