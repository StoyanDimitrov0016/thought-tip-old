import allPaths from "./allPaths";

const authenticationPaths = [
  { title: "Authenticate", path: allPaths.authenticateRedirect },
  { title: "Sign Out", path: allPaths.signOut },
  { title: "Sign In", path: allPaths.signIn },
  { title: "Sign Up", path: allPaths.signUp },
];

export default authenticationPaths;
