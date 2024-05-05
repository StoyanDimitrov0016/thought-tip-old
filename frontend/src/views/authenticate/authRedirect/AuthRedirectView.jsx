import allPaths from "../../../paths/allPaths";
import {
  AuthRedirectNavContainer,
  AuthRedirectStyledLink,
  AuthRedirectLinkText,
} from "./AuthRedirectView.styles";

const AuthRedirectView = () => {
  return (
    <AuthRedirectNavContainer aria-label="Authentication Options">
      <h2>I want to...</h2>
      <AuthRedirectStyledLink
        to={allPaths.signUp}
        aria-label="Sign up for a new account"
      >
        <AuthRedirectLinkText>
          Sign up (I don't have an account yet)
        </AuthRedirectLinkText>
      </AuthRedirectStyledLink>
      <AuthRedirectStyledLink
        to={allPaths.signIn}
        aria-label="Sign in to existing account"
      >
        <AuthRedirectLinkText>
          Sign in (I already have an account)
        </AuthRedirectLinkText>
      </AuthRedirectStyledLink>
    </AuthRedirectNavContainer>
  );
};
export default AuthRedirectView;
