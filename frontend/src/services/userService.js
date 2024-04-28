import requesterHTTP from "./apiRequester";
import userLocalStorage from "./userStorage";

const BASE_URL = "http://localhost:7000/api/v1/users";

const updateUser = async (userId, updatedUserData) => {
  try {
    const url = `${BASE_URL}/${userId}`;
    const result = await requesterHTTP.put(url, updatedUserData);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getUserArticles = (userId) => {
  try {
    const url = `${BASE_URL}/`;
  } catch (error) {
    console.log(error);
  }
};

const getUserDetails = async () => {
  try {
    const { _id } = userLocalStorage.getUser();
    const userDetails = await requesterHTTP.get(`${BASE_URL}/${_id}`);
    return userDetails;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  updateUser,
  getUserDetails,
};

export default userService;
