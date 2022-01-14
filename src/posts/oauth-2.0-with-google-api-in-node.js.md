---
title: OAuth 2.0 with Google API in Node.js
description: I had trouble getting my head around the authentication flow with all
  the tokens and secrets and all that. But digging deep, it was quite simple actually
  and started to appreciate how google makes the process so simple and dare I say,
  elegant.
date: 2020-08-16T14:00:00.000+00:00
tags:
- blog
layout: layouts/post.njk
feature_image: img/google.png

---
With all the async awaits, promises, `.then` and all the other JS-specific stuff, doing even simple tasks in Javascript can feel overwhelming for beginner backend developers.

To preface, I'm currently working on my own application which is a simple Match betting tracker to keep track of my bets, and decided to add OAuth authentication in the app to let users log in from their Gmail account. 

The first thing I did was set up an account in Google console, and got me some shiny new credentials (client ID and client Secret) for OAuth 2.0.

I had trouble getting my head around the authentication flow with all the tokens and secrets and all that. But digging deep, it was quite simple actually and started to appreciate how google makes the process so simple and dare I say, elegant.

The first thing I did was get the google api:

      npm install googleapis

In the actual program:  
initialized the API library and setup google config.

    const { google } = require('googleapis');
    const oauth2 = google.oauth2('v2');
    
    const Oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT, // this must match your google api settings
    );

So basically all I had to do was these 3 things:

1. get a Redirect url for the clients
2. The url also contains a code which then I use to get a token ( if the user signs in to their Google account that is)
3. And finally I use the token to get the user details

Step 1:

    function getConnectionUrl() {
        return Oauth2Client.generateAuthUrl({
            access_type: 'offline',
            prompt: 'consent',
            scope: defaultScope
        });
    }
    
    //Call this function somewhere in the program to get URL:
    //const url = getConnectionUrl();

Step 2 and 3:

    function getUserDetails(code) {
        return Oauth2Client.getToken(code)   //use code to get the token
            .then(({ tokens }) => {
                Oauth2Client.setCredentials(tokens);     //add token to the Oauth credentials
            })
            .then(() => {
                return oauth2.userinfo.get({ auth: Oauth2Client });  // get userinfo with the newly updated credentials
            })
    }

And so in the main program , I got a connection url using getConnectionUrl() which then gave me the code in the url which I passed on to getUserDetails() to get the user details.

So this is how I got OAuth authentication working in my application.

If you want to check out my repo, here's the link :

* [Matched-betting-tracker](https://github.com/nipeshkc7/matched-betting-tracker)

**_UPDATE_**

Using async-await steps 2 and 3 can be reduced to ::

     function async getUserDetails(code) {
       const {tokens} = await Oauth2Client.getToken(code);
       Oauth2Client.setCredentials(tokens);
       const usr_info = await oauth2.userinfo.get({auth: Oauth2Client});
       return usr_info;
     } 

This looks cleaner and async-await is alot more intuitive to use.

_This blog post was originally posted on_ [_dev.to_](dev.to)