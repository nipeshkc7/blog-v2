---
title: Express
description: Advanced Express
date: 2020-08-10T14:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk

---
### Using middlewares

You can use middlewares to intercept the (req,res,next) objects before the controllers.

    app.get('/home',middleware1 , (req,res) =>{ ... })
    // Or for multiple middlewares
    app.get('/home',[middleware1 , middleware2] , (req,res) =>{ ... })

However avoid using middlewares if possible, as it intercepts any and every request and slows it down.

### Tip: use return res.end() or return next()

It is important to use the return keyword in some cases to complete the execution of the function, sometimes when there is no return keyword, the preceeding code will run and may end up with errors.

### Cors

Use Cors to allow cross origin request.

### Express Best practices:

* Use process managers like PM2, which has clustering built in.
* Use load balancers.
* Use clustering to launch a cluster of processes.
* Avoid synchronous functions if possible.

#### Resources

* [https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts](https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts "https://expressjs.com/en/advanced/best-practice-performance.html#ensure-your-app-automatically-restarts")