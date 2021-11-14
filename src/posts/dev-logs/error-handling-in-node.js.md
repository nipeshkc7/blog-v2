---
title: Error Handling in Node.js
description: Using robust error handling in Node.js
date: 2020-11-18T13:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Checklist for Robust Error Handling

Here's a checklist to ensure that errors don't go undetected in your Node.js application:

* Make sure for every **throw,** there is a catch mechanism in place.
* For error first callbacks, always check **error** is null.
* Make sure you're notified of **uncaught exceptions.**
* Use try-catch in common error-prone sources like JSON.parse, and database query operations.

#### Notify yourself of uncaught exceptions

The following code snippet will help you in detecting uncaught exceptions in productions:

    var nodemailer = require('nodemailer')
    var transport = nodemailer.createTransport('SMTP', { // [1]
      service: "Gmail",
      auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
      }
    })
    
    if (process.env.NODE_ENV === 'production') { // [2]
      process.on('uncaughtException', function (er) {
        console.error(er.stack) // [3]
        transport.sendMail({
          from: 'alerts@mycompany.com',
          to: 'alert@mycompany.com',
          subject: er.message,
          text: er.stack // [4]
        }, function (er) {
           if (er) console.error(er)
           process.exit(1) // [5]
        })
      })
    }

#### Some Helpful links

* [https://www.joyent.com/node-js/production/design/errors#fnref:1](https://www.joyent.com/node-js/production/design/errors#fnref:1 "https://www.joyent.com/node-js/production/design/errors#fnref:1")
* [https://strongloop.com/strongblog/robust-node-applications-error-handling/](https://strongloop.com/strongblog/robust-node-applications-error-handling/ "https://strongloop.com/strongblog/robust-node-applications-error-handling/")