---
title: Native fetch support in Node.js
description: Everything about native fetch support in Node.js
date: 2022-02-24T13:00:00.000+11:00
tags:
- blog
- draft
layout: layouts/post.njk
feature_image: ''

---
# What is fetch?

Fetch is a browser API that lets you send HTTP requests i.e. `fetch` resources from servers similar to the much older [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest") whose primary purpose was to allow access to resources without forcing a page to reload. Unlike its predecessor, fetch is promise based allowing you to use `async-await` and `.then()` whereas XMLHttpRequest primarily relied on callbacks. Fetch is now available on all browsers and is attached to the global `window` object which means you can call it from anywhere without having to import or require any modules.

## Brief History of fetch

### WHATWG standard highlights

[WHATWG](https://whatwg.org/ "whatwg"), the community of people responsible for creating standards on HTML and related technologies have created a standard for `fetch` which is applied in all modern browsers. And this is the standard followed for moving fetch serverside. 

### Current state in nodejs

### How to use it?