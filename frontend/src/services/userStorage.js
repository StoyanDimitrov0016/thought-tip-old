const setUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const getUser = () => {
  try {
    const userStringified = localStorage.getItem("user");

    if (userStringified) {
      const userParsed = JSON.parse(userStringified);
      return userParsed;
    }

    return null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

const deleteUser = () => {
  localStorage.removeItem("user");
};

const userLocalStorage = {
  setUser,
  getUser,
  deleteUser,
};

export default userLocalStorage;
