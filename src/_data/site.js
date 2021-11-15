require("dotenv").config();

// Get all site information
module.exports = async function () {
  return {
    title: "Arpan's Blog",
    description: 'Javascript, Cloud, Rust and much more ...',
    logo: 'https://arpankc.com/img/download.png',
    icon: 'https://arpankc.com/img/icon.png',
    cover_image: 'https://static.ghost.org/v1.0.0/images/blog-cover.jpg',
    twitter: '@nipeshkc7',
    stack_overflow: "users/6470513/arpan-kc",
    github: "nipeshkc7",
    dev: "nipeshkc7",
    medium: "@arpankc",
    navigation: [
      { label: 'Home', url: '/' },
      { label: 'Dev Logs', url: '/dev-logs/' },
      { label: 'About', url: '/posts/welcome/' },
      {
        label: 'Repo',
        url: 'https://github.com/nipeshkc7/blog-v2'
      },
      //{ label: 'Author', url: '/author/ghost/' },
      //{ label: 'Help', url: 'https://docs.ghost.org' }
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
    members_support_address: 'noreply@eleventy.ghost.io',
    url: process.env.ELEVENTY_ENV === "prod" ? "https://blog.arpankc.com" : "http://localhost:8080",
    ghost_head: null,
    ghost_foot: null,
    active_timezone: 'Etc/UTC',
    default_locale: 'en'
  }
};
