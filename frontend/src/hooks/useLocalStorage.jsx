import { useState } from "react";
import userLocalStorage from "../services/userStorage";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const userState = userLocalStorage.getUser();

    if (userState) {
      return userState;
    }

    return initialValue;
  });

  const setLocalStorage = (data) => {
    setState(data);

    if (Object.keys(data).length > 0) {
      userLocalStorage.setUser(key, data);
    } else {
      userLocalStorage.deleteUser();
    }
  };

  return [state, setLocalStorage];
};
