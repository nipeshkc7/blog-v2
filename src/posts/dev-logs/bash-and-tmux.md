---
title: Bash and Tmux
description: Bash and Tmux
date: 2021-08-09T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Useful Bash Tips

* Use alias for shortcut commands

      $ alias gs="git status"
* Update `.bashrc` and update it as the source.

  $ vi \~/.bashrc
  $ source \~/.bashrc

### Tmux

Tmux, in simple terms is a Terminal Multiplexer. It has the following benefits:

* Can save and navigate between different sessions, example: opensource-session, work-session.
* Allows window split functionality

#### Tmux Resources

* [https://www.barbarianmeetscoding.com/blog/jaimes-guide-to-tmux-the-most-awesome-tool-you-didnt-know-you-needed](https://www.barbarianmeetscoding.com/blog/jaimes-guide-to-tmux-the-most-awesome-tool-you-didnt-know-you-needed "https://www.barbarianmeetscoding.com/blog/jaimes-guide-to-tmux-the-most-awesome-tool-you-didnt-know-you-needed")
* [https://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/](https://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/ "https://www.hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/")

#### Tmux tips

* Set mouse mode on:

      $ set -g mouse on