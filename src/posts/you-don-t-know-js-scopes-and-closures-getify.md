---
title: You Don't Know JS (Scopes and Closures) - Getify
description: Notes from YDKJS.
date: 2020-10-11T13:00:00.000+00:00
tags:
- bookclub
layout: layouts/post.njk
feature_image: img/you-dont-know-js.png

---
### You Don't Know JS: Scopes & Closures Part 1 (Intro)

**Compilation** is a process that consists of three different steps:

1. Tokenizing: Converting charecters to chunks called tokens.
2. Parsing: Converting tokens into an Abstract Syntax Tree.
3. Code Generation: Converting Abstract Syntax Tree to machine code.

### **Targets vs sources** 

Targets are identifier/names, sources are the values. There are many different ways for target to value assertion, For example `function getStudentName(..)` , where getStudentName is a target and `function(..)` is a source .

### Some Helpful Tips

* Never use `eval()` since it can mess with the scope already established at runtime, and the program can also takes a performance hit. For example
*  with() keyword is also bad

\- Scopes determined at compilation, Use the bucket and marble 🥃🎱 metaphor to match a variable with a scope. (same color marbles go in same color buckets

![](/img/unnamed.png)

### 👩‍💻👩‍💻 You Don't Know JS : Scopes & Closures🔒🎉 ➡ 2 (Engine, Compiler and Scope manager)

\- Engine🚂 : handles compilation to execution(start to finish), Compiler: 📄 Handles compilation(tokenization ⏭ AST ⏭ machine code), Scope manager 👨🏻‍💼: Keeps track of variables and scopes

\- What happens when var studentArray = \[ ... \] //initialization

1. (During compilation 📄💨) Compiler asks ❓ if scope manager has a studentArray declaration, if not declares it
2. (During runtime) Engine asks ❓ scope manager if studentArray is variable, says yes then Engine initializes it to undefined so its ready to use 🏁 , and then assigns the array value to it.

\- When JS engine comes across a variable, asks current scope for value, if not , it asks the outer scope, and so on...

\- 'var' temporarily sets to undefined,(unlike let/const which sets it uninitialized / TDZ 🔪)

\- Says reference error 🤯 if source lookup fails (get(x)) or target(x=2 where x has not been declared)lookup fails(in strict mode)

\- Variable scopes are usually determined at compilation ➿ before runtime🏃🏻‍♂️, unless a variable cannot be found in the current file (exists in a different file). In that case, it is resolved at runtime( when it finds it in a different file) (resolved to global scope usually)

![](https://keep.google.com/u/0/media/v2/16P__GInVbbaNKlDjjf-k4aW8ARWC1OyeeCXXRO-v5leSX3sAMzEHP7dU_LFqvkk/1iVr3WuBG3gxpeja8sQv7ACeSfXjyvz6Qea4-xEjYlr4te9VQ6lFIdJU6O0ryiw?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1126)

![](https://keep.google.com/u/0/media/v2/16P__GInVbbaNKlDjjf-k4aW8ARWC1OyeeCXXRO-v5leSX3sAMzEHP7dU_LFqvkk/1Bvu2z0tFGV6TsUjXvb44SuRXkT8sXujIeRYErklZTvzGrh_zl58gCEx2ikYM-g?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1044)