import userLocalStorage from "./userStorage";

const requester = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const user = userLocalStorage.getUser();

  if (user?.authenticationJWT) {
    options.headers["Authorization"] = `Bearer ${user.authenticationJWT}`;
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const err = await response.json();

      if (response.status === 401 && err.message === "Invalid access token") {
        userLocalStorage.deleteUser();
        alert("Expired session, please login again.");
        window.location.reload();
      }

      throw new Error(err.message);
    }

    if (response.status === 204) {
      return response;
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const requesterHTTP = {
  get: requester.bind(null, "GET"),
  post: requester.bind(null, "POST"),
  put: requester.bind(null, "PUT"),
  delete: requester.bind(null, "DELETE"),
};

export default requesterHTTP;
