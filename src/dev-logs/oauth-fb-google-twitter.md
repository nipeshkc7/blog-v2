---
title: OAuth (FB/ Google / Twitter)
description: OAuth (Fb/ google/ twitter)
date: 2020-08-14T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk
feature_image: img/oauth.webp

---
### Facebook login

#### Issue with facebook login: 

You can uncheck 'email' option when logging in with facebook, so if your app relies on getting email from facebook, you'll have to handle the error and enable the `rerequest `option when authenticating. In \[passport facebook\]([http://www.passportjs.org/docs/facebook/](http://www.passportjs.org/docs/facebook/ "http://www.passportjs.org/docs/facebook/")) it's done as follows:

    passport.authenticate('facebook', { scope: ['email'],
      scope: ['email'],
      session: false, 
      session: false,
      authType: 'rerequest',
      })	  
    })

### Twitter login

#### Issue with twitter login:

You **NEED** sessions for twitter login, so it won't work on stateless containers like `cloud run`.