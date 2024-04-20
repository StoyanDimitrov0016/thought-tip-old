/* TODO: Migrate the "About Us" content to the backend to facilitate dynamic updates and localization.
  Implement an API endpoint to fetch this content, removing the current hardcoded data from the frontend.
  This change will allow easier content management and updates without needing to redeploy the frontend. */

const aboutUsContent = {
  title: "About Our Platform",
  description:
    "Discover how we're revolutionizing the way knowledge is shared and rewarded through innovative use of micro-tipping technology.",
  sections: [
    {
      header: "Our Vision",
      content:
        "Our goal is to transform how knowledge is exchanged online by empowering users to directly reward creators with micro-tips. This system leverages the efficiency of the Lightning Network to make even the smallest contributions feasible and meaningful.",
    },
    {
      header: "Founder's Story",
      content:
        "As a passionate advocate for both education and technology, I was inspired to create a platform that bridges the gap between knowledge seekers and providers. After observing the limitations of traditional monetization methods in digital content, I envisioned a system where contributions could be acknowledged with micro-payments that reflect the actual value users derive from the content.",
    },
    {
      header: "How It Works",
      content:
        "You can browse through articles on a variety of topics, gaining insights and new knowledge. If you find an article beneficial, you can send a tip directly to the author, starting from as little as one cent (or less). This functionality not only supports creators financially but also builds a community ethos centered around appreciation and support.",
    },
    {
      header: "Why Join Us",
      content:
        "Joining our platform means entering a community where knowledge has real value. Whether you are here to learn, share your expertise, or both, you contribute to a cycle of continuous learning and appreciation. Each interaction here is a step towards a more informed and connected world.",
    },
    {
      header: "Looking Ahead",
      content:
        "In the future, we aim to introduce features like live discussions, interactive Q&A sessions, and more diverse content options to enhance user engagement and provide more avenues for creators to monetize their knowledge.",
    },
  ],
};

export default aboutUsContent;
