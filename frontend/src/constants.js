import endpoints from "../endpoints";

export const navigationLinks = [
  {
    path: endpoints.HOME,
    label: "Home",
  },
  {
    path: endpoints.NOTIFICATIONS,
    label: "Notifications",
  },
  {
    path: endpoints.SIGN_IN,
    label: "Sign In",
  },
  {
    path: endpoints.SIGN_UP,
    label: "Sign Up",
  },
];

export const navDropDownMenuLinks = [
  {
    path: endpoints.PREFERENCES,
    label: "Preferences",
  },
  {
    path: endpoints.PROFILE,
    label: "Profile",
  },
];

export const footerLinks = [
  {
    path: endpoints.CONTACT,
    label: "Contact",
  },
  {
    path: endpoints.ABOUT,
    label: "About",
  },
  {
    path: endpoints.GETTING_STARTED,
    label: "Getting Started",
  },
];

export const applicationName = "Thought Tip";

export const currentYear = new Date().getFullYear();

export const SignInAndOutTextContents = {
  signIn: {
    message: "Already have an account? ",
    action: "Sign In",
    linkRoute: endpoints.SIGN_IN,
  },
  signUp: {
    message: "Don't have an account? ",
    action: "Sign Up",
    linkRoute: endpoints.SIGN_UP,
  },
};

export const contactOptions = [
  {
    title: "Tel.:",
    content: "Our working time is from 9:00 up to 19:00 every day",
    value: "+359 897 875 9273",
  },
  {
    title: "Email:",
    content: "The average answering time is 1 working day",
    value: "example@emailsomething.com",
  },
];
