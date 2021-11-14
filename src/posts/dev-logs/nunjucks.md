---
title: Nunjucks
description: All about nunjucks templating engine
date: 2020-09-18T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Getting started with nunjucks, nodejs and express

Using [nunjucks](https://mozilla.github.io/nunjucks/) from Mozilla, you can create SSR sites very quickly.

#### Index.js

    const express = require('express');
    const app = express();
    
    const nunjucks = require('nunjucks');
    const path = require('path');
    
    nunjucks.configure('./src/views/', {
      autoescape: true,
      express: app,
    });
    
    app.set('view engine', 'njk');
    
    app.get('/', (req, res) => {
      res.render('home', {});
    })
    
    const PORT = process.env.PORT || 8080;
    app.listen(PORT);
    console.log(`App started on port: ${PORT}`);