---
title: React
description: React tips
date: 2020-08-11T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Hooks

* UseEffect runs everytime the app renders, second parameter determines when it renders, for eg useEffect(()=>{}, \[\]) runs on first load, second paramenter can be a state and useeffect will run when the state updates.
* setState will not update the state automatically, so better to have a useEffect that will do stuff when it updates.
* window.localstorage won't be available until the app renders on the client side.