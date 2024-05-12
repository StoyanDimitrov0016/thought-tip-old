import { Link, Outlet, useParams } from "react-router-dom";
import FooterLayout from "../../layouts/FooterLayout/FooterLayout";
import UserDetailsSubView from "./subviews/user-details/UserDetailsSubView";
import UserArticlesSubView from "./subviews/user-articles/UserArticlesSubView";
import UserFavoritesSubView from "./subviews/user-favorites/UserFavoritesSubView";

const WithProfileView = () => {
  const { subview } = useParams();

  const renderSubView = (subview) => {
    switch (subview) {
      case "details":
        return <UserDetailsSubView />;
      case "articles":
        return <UserArticlesSubView />;
      case "favorites":
        return <UserFavoritesSubView />;
      default:
        return <UserDetailsSubView />;
    }
  };

  const currentTab = renderSubView(subview);

  const outletContext = {
    currentTab,
  };

  return (
    <FooterLayout>
      <header>
        <nav>
          <Link to={"/my-profile/details"}>My Profile</Link>
          <Link to={"/my-profile/articles"}>My Articles</Link>
          <Link to={"/my-profile/favorites"}>My Favorites</Link>
        </nav>
      </header>

      <Outlet context={outletContext} />
    </FooterLayout>
  );
};

export default WithProfileView;
