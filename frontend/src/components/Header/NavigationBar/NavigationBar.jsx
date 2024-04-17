import { Link } from "react-router-dom";

import { NavigationBarContainer } from "./NavigationBar.styles";
import SearchBar from "../SearchBar/SearchBar";
import endpoints from "../../../../endpoints";
import { useUserContext } from "../../../contexts/UserContext";
import allPaths from "../../../paths/allPaths";

const NavigationBar = () => {
  const { user } = useUserContext();
  const onSearch = () => {};

  return (
    <NavigationBarContainer>
      <ul>
        <li>
          <Link to={allPaths.home}>
            <img src="/example-logo.png" alt="Home" />
          </Link>
        </li>
        <li>
          <SearchBar onSearch={onSearch} />
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
            <Link to="/users/authenticate">Sign In/Up</Link>
          </li>
        )}
      </ul>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
