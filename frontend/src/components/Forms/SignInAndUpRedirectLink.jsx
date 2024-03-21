import { Link } from "react-router-dom";
import { SignInAndUpRedirectLinkStyled } from "../../styled/formStyles";
import endpoints from "../../../endpoints";

const textContents = {
  signIn: {
    message: "Already have an account? ",
    action: "Sign In",
    linkRoute: endpoints.SIGN_IN,
  },
  signUp: {
    message: "Don't have an account? ",
    action: "Sign Up",
    linkRoute: endpoints.SIGN_UP,
  },
};

const SignInAndUpRedirectLink = ({ isSignUp }) => {
  const { message, action, linkRoute } = isSignUp ? textContents.signIn : textContents.signUp;

  return (
    <SignInAndUpRedirectLinkStyled>
      {message}
      <Link to={linkRoute}>{action}</Link>
    </SignInAndUpRedirectLinkStyled>
  );
};

export default SignInAndUpRedirectLink;
