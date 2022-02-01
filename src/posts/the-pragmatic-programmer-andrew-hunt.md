---
title: The Pragmatic Programmer - Andrew Hunt and Dave Thomas
description: Notes from the pragmatic programmer
date: 2020-10-03T14:00:00.000+00:00
tags:
- bookclub
layout: layouts/post.njk
feature_image: img/pragmatic.png

---
`The Pragmatic Programmer` by Andrew Hunt and Dave Thomas is one of the best books a software engineer can read especially in their early years. It contains useful analogies, anecdotes, and examples that help you have better mental models when writing and developing software.

These are some of the important topics and highlights that stood out to me from `The Pragmatic Programmer`

### Software Entropy:

_"Broken window theory"_: The point where everything in a building starts deteriorating is a broken window. So if you see a broken window (in our case, code smells), fix it immediately.

### Good-Enough Software

Surprisingly, many users would rather use software with some rough edges today, than wait for fancy bells and whistles a year from now. So it's important to understand when software is good enough to ship.

### The Essence of Good Design

You may need to spend a week or so deliberately asking yourself "did the thing I just did make the overall system easier or harder to change?" Do it when you save a file. Do it when you write a test. Do It when you fix a bug.

### DRY- The Evils of Duplication

DRY is about the duplication of knowledge, of intent. It's about expressing the same thing in two different places, possibly in two different ways. A common misconception is that DRY refers to only the duplication of code, however, that is inaccurate.

Here's an acid test: when some single facet of the code has to change, do you find yourself making the change in multiple places, and in multiple different formats? Do you have to change code and documentation, or a database schema and a structure that holds it, or...? If so, your code isn't DRY.

### Orthogonality

* In a well-designed system, the database code will be orthogonal to the user interface: you can change the interface without changing the interface.
* _Don't rely on the properties of things you can't control._
* Writing unit tests is itself an interesting test of orthogonality.
* Bug fixing is also a good time to assess the orthogonality of the system as a whole. When you come across a problem, assess how localized the fix is. Do you change just one module, or are the changes scattered?

### Reversibility

The mistake lies in assuming that any decision is cast in stone - and in not preparing for the contingencies that might arise. Instead of carving decisions in stone, think of them more as being written in the sand at the beach. A big wave can come along and wipe them out at any time.

### Tracer Bullets

Unlike prototyping, which generates disposable code. Tracer code is lean but complete and forms part of the skeleton of the final system.

### Domain Languages

* Give them code that runs, and they can play with it. That's where the real needs will surface.

### Debugging

If the suspect code passes its unit tests, are the tests complete enough?

### Design By Contract

It's important to specify what a function will do beforehand, also specifying the domain of the function and in turn, will perform a task ( Like an employee contract). Simply enumerating what the input domain range is, what the boundary conditions are, and what the routine promises to deliver - or, more importantly, what it doesn't promise to deliver - before you write code is a huge leap forward in writing better software.

### Dead Programs Tell No Lies

There's no point in reraising exceptions. We've all been there throwing and recatching, but for what? Unless absolutely necessary a specific error may be thrown at a single point in the code.