import requesterHTTP from "./apiRequester";
import userLocalStorage from "./userStorage";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "http://localhost:7000/api/v1/auth";

const signUp = async (userInputCredentials) => {
  try {
    const result = await requesterHTTP.post(
      `${BASE_URL}/sign-up`,
      userInputCredentials
    );

    const decoded = jwtDecode(result.authenticationJWT);
    decoded.authenticationJWT = result.authenticationJWT;

    userLocalStorage.setUser(decoded);

    return result;
  } catch (error) {
    throw error;
  }
};

const signIn = async (userInputCredentials) => {
  try {
    const result = await requesterHTTP.post(
      `${BASE_URL}/sign-in`,
      userInputCredentials
    );
    console.log(result);
    const decoded = jwtDecode(result.authenticationJWT);
    decoded.authenticationJWT = result.authenticationJWT;

    userLocalStorage.setUser(decoded);
    return result;
  } catch (error) {
    throw error;
  }
};

const signOut = async () => {
  try {
    await requesterHTTP.get(`${BASE_URL}/sign-out`);
    userLocalStorage.deleteUser("user");
  } catch (error) {
    throw error;
  }
};

const authService = {
  signUp,
  signIn,
  signOut,
};

export default authService;
