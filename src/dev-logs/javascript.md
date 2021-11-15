---
title: Javascript
description: JS tips and tricks
date: 2020-09-15T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
## Null checking

Javascript is very flexible with regards to checking for "null" values. I'm guessing you're actually looking for empty strings, in which case this simpler code will work:

    if(!pass || !cpass || !email || !cemail || !user){

Which will check for empty strings (`""`), `null`, `undefined`, `false` and the numbers `0` and `NaN`

Please note that if you are specifically checking for numbers it is a common mistake to miss `0` with this method, and `num !== 0` is preferred (or `num !== -1` or `~num` (hacky code that also checks against `-1`)) for functions that return `-1`, e.g. `indexOf`)