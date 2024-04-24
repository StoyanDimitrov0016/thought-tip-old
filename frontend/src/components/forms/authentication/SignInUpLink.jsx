import allPaths from "../../../paths/allPaths";
import { StyledLink, StyledParagraph } from "../form-components.styles";

const textContents = {
  signUp: {
    message: "Don't have an account? ",
    action: "Sign Up",
    linkRoute: allPaths.signUp,
  },
  signIn: {
    message: "Already have an account? ",
    action: "Sign In",
    linkRoute: allPaths.signIn,
  },
};

const SignInUpLink = ({ isSignUp }) => {
  const { message, action, linkRoute } = isSignUp
    ? textContents.signIn
    : textContents.signUp;

  return (
    <StyledParagraph>
      {message}
      <StyledLink to={linkRoute}>{action}</StyledLink>
    </StyledParagraph>
  );
};

export default SignInUpLink;
