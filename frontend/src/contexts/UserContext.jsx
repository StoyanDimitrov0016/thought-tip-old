import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import storage from "../services/userStorage";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return storage.getUser();
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const onSignUp = async (data) => {
    setIsLoading(true);
    setErrors(null);

    try {
      const result = await authService.signUp(data);

      setUser({ ...result });
      navigate("/");
    } catch (error) {
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignIn = async (data) => {
    setIsLoading(true);
    setErrors(null);

    try {
      const result = await authService.signIn(data);
      console.log(result);
      setUser({ ...result });
      navigate("/");
    } catch (error) {
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignOut = async () => {
    await authService.signOut();

    setUser(null);
    navigate("/");
  };

  const isAuthenticated = user?.token;

  const contextValue = {
    user,
    isAuthenticated,
    onSignUp,
    onSignIn,
    onSignOut,
    setErrors,
    isLoading,
    errors,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
