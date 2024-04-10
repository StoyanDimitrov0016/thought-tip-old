import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { jwtTrashBin } from "../services/authService.js";

const JWT_SECRET = process.env.JWT_SECRET;

function createJWT({ _id, email, firstName, lastName }) {
  const payload = { _id, email, firstName, lastName };
  const token = jwt.sign(payload, JWT_SECRET); // { expiresIn: "1h" }
  return token;
}

function verifyJWT(token) {
  try {
    if (jwtTrashBin.has(token)) {
      throw new Error("Expired token has been used again");
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error(`Token verification failed: ${error.message}`);
  }
}

const jwtAuthentication = { createJWT, verifyJWT };

export default jwtAuthentication;
