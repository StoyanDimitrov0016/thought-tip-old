import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config.js";

const JWT_SECRET = process.env.JWT_SECRET;

const blacklist = new Set();

async function signUp(firstName, lastName, email, password) {
  const existingUser = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (existingUser) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const token = createJWT(user);
  return token;
}

async function signIn(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (!user) {
    throw new Error("Incorrect user credentials");
  }

  const doPasswordsMatch = await bcrypt.compare(password, user.password);

  if (!doPasswordsMatch) {
    throw new Error("Incorrect user credentials");
  }

  const token = createJWT(user);
  return token;
}

async function signOut(token) {
  blacklist.add(token);
}

function createJWT({ _id, email, firstName, lastName }) {
  const payload = {
    _id,
    email,
    firstName,
    lastName,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token;
}

function verifyJWT(token) {
  try {
    if (blacklist.has(token)) {
      throw new Error("Expired token");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error(`Token verification failed:${error}`);
  }
}

const userService = {
  signUp,
  signIn,
  signOut,
  createJWT,
  verifyJWT,
};
