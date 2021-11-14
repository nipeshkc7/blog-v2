---
title: MacOS Tips and References
description: MacOS Tips and References
date: 2021-07-16T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Homebrew

Homebrew is a package manager for MacOs much like `apt` is for Ubuntu. It is not installed by default so use the following steps to install it.

#### Installation steps

To install:

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

In some cases, `brew` command is not available in the shell. To fix this, use the command:

    export PATH=/opt/homebrew/bin:$PATH		

### Default Paths for M1 Mac

M1 macs use the `zsh` shell by default so all the environment path will be configured inside `~/.zshrc`, To update the folder use command:

    sudo vi ~/.zshrc

##### References

* [https://stackoverflow.com/questions/36657321/after-installing-brew-i-get-command-not-found-brew/36805293](https://stackoverflow.com/questions/36657321/after-installing-brew-i-get-command-not-found-brew/36805293 "https://stackoverflow.com/questions/36657321/after-installing-brew-i-get-command-not-found-brew/36805293")