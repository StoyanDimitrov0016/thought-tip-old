const allPaths = {
  home: "/",
  particularArticle: (articleId) => `/articles/${articleId}`,
  userNotifications: "/my-notifications",
  userProfile: {
    details: "/my-profile/details",
    articles: "/my-profile/articles",
    favorites: "/my-profile/favorites",
  },
  createArticle: "/create-article",
  updateArticle: (articleId) => `/update-article/${articleId}`,

  //

  // Authenticate part:
  authenticateRedirect: "/authenticate-redirect",
  signIn: "/auth/sign-in",
  signUp: "/auth/sign-up",
  signOut: "/auth/sign-out",

  // Footer part:
  aboutUs: "/company/about-us",
  contactUs: "/company/contact-us",
  careers: "/company/careers",
  gettingStarted: "/resources/getting-started",
  faqs: "/resources/faqs",
  privacyPolicy: "/legals/privacy-policy",
  termsOfService: "/legals/terms-of-service",
  cookiesPolicy: "/legals/cookies-policy",

  // browse topics
  browseTopics: "/topics",
};

export default allPaths;
