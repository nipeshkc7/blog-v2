require("dotenv").config();

// Get all site information
module.exports = async function () {
  return {
    title: "Arpan's Blog",
    description: 'Node.js, Cloud, Web and much more ...',
    logo: 'https://arpankc.com/img/download.png',
    icon: 'https://arpankc.com/img/icon.png',
    cover_image: 'https://static.ghost.org/v1.0.0/images/blog-cover.jpg',
    twitter: '@arpnkc',
    stack_overflow: "users/6470513/arpan-kc",
    github: "nipeshkc7",
    dev: "nipeshkc7",
    medium: "@arpankc",
    navigation: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/posts/welcome/' },
      {
        label: 'Newsletter',
        url: 'https://newsletter.arpankc.com'
      },
    ],
    secondary_navigation: [],
    meta_title: null,
    meta_description: null,
    og_image: null,
    og_title: null,
    og_description: null,
    twitter_image: null,
    twitter_title: null,
    twitter_description: null,
    members_support_address: 'arpnkc@gmail.com',
    url: process.env.ELEVENTY_ENV === "prod" ? "https://blog.arpankc.com" : "http://localhost:8080",
    ghost_head: null,
    ghost_foot: null,
    active_timezone: 'Etc/UTC',
    default_locale: 'en'
  }
};
