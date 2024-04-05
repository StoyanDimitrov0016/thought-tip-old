import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwtAuthentication from "../utils/jwtAuthenticate.js";

const SALT_ROUNDS = 12;
export const jwtTrashBin = new Set();

async function signIn(email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("A user with these credentials does not exist.");
    }

    const doPasswordsMatch = await bcrypt.compare(password, user.password);
    if (!doPasswordsMatch) {
      throw new Error("A user with these credentials does not exist.");
    }

    const jwt = jwtAuthentication.createJWT(user);
    return jwt;
  } catch (error) {
    throw error;
  }
}

async function signUp(firstName, lastName, email, password) {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("An account with these credential already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const jwt = jwtAuthentication.createJWT(newUser);
    return jwt;
  } catch (error) {
    throw error;
  }
}

async function signOut(token) {
  jwtTrashBin.add(token);
}

const authService = {
  signUp,
  signIn,
  signOut,
};

export default authService;
