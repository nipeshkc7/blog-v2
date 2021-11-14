---
title: Node JS Tips
description: Tips about Node.js
date: 2020-10-22T13:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk

---
Below are some helpful tips and tricks, useful when it comes to server-side JS.

### Debugging in Node.js

You can debug from the command line using:

    node inspect index.js

#### Helpful commands with command line debugger:

* `s` : step to next line
* `sb()`: set breakpoint, takes line number as parameter

Or, to debug using a different client like chrome browser use:

    node --inspect index.js

And visit `chrome://inspect` to visually debug the node.js app.