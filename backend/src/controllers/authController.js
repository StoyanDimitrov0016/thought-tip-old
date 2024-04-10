import authService from "../services/authService.js";

async function signUp(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userJWT = await authService.signUp(
      firstName,
      lastName,
      email,
      password
    );
    res.status(201).json({ authenticationJWT : userJWT });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    const userJWT = await authService.signIn(email, password);

    res.status(200).json({ authenticationJWT : userJWT });
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
}

async function signOut(req, res) {
  try {
    await authService.signOut(req.token);
    res.status(200).send("Signed out successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const authController = {
  signUp,
  signIn,
  signOut,
};

export default authController;
