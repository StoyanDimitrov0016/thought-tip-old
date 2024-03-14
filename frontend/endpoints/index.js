// endpoints/index.js

const endpoints = {
    HOME: "/",
    SIGN_IN: "/user/auth/sign-in",
    SIGN_UP: "/user/auth/sign-up",
    THOUGHT: (thoughtId) => `/thoughts/${thoughtId}`,
    PREFERENCES: "/user/preferences",
    NOTIFICATIONS: "/user/notifications",
    PROFILE: "/user/profile",
    THOUGHTS: "/thoughts",
    CONTACT: "/contact",
    ABOUT: "/about",
    GETTING_STARTED: "/getting-started",
};

export default endpoints;
