---
title: Rust Programming Language
description: Notes on Rust Lang
date: 2021-08-28T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk
feature_image: img/rust.jpeg

---
Rust \[[https://doc.rust-lang.org/rust-by-example/index.html](https://doc.rust-lang.org/rust-by-example/index.html "https://doc.rust-lang.org/rust-by-example/index.html")\] is a C-style language built to be efficient and has its own custom approach to garbage collection. It has similarities with C with the use of pointers and adds some modern flavoring for a better Development experience. It introduces new concepts like Ownership.

Some Rust concepts:

* **Ownership:**  
  A variable, if passed on to a function will go out of scope for that scope and will be transferred to the called function. In other words, the **ownership** of the variable is transferred to a different function.
* **References and Borrowing:**

  References cannot be borrowed by multiple variables. For example

      let x = String::from("hello");
      let y = &x;
      let z = &x; 		//Causes an error

  [https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html "https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html")

  Additionally, borrowed references are not mutable unless the `mut` keyword is used to make it mutable.