import jwtAuthentication from "../utils/jwtAuthenticate.js";

const checkSessionToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    if (token) {
      try {
        const payload = jwtAuthentication.verifyJWT(token);

        req.user = payload;
        req.token = token;
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Invalid authentication token (JWT)." });
      }
    }
  } else {
    next();
  }
};

export default checkSessionToken;
