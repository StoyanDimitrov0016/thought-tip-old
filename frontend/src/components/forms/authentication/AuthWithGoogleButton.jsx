import { GoogleButton } from "../form-components.styles";

const AuthWithGoogleButton = ({ isSignUp }) => {
  const textContent = isSignUp ? "Sign Up with Google" : "Sign In with Google";

  return <GoogleButton>{textContent}</GoogleButton>;
};

export default AuthWithGoogleButton;
