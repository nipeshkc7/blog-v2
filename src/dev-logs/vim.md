---
title: Vim
description: Adventures in VIM
date: 2020-08-10T14:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk
feature_image: /img/vim-banner.png

---
Some Vim tips to get you up and running using VIM.

### Basic Keys

* **i** : Press 'i' to start inserting text
* **j, k, l, ;**  Movement Keys (Down, Up, Right, Left) 
* **ESC** : Escape text-inserting mode
* **:x** : Save and quit

### Plugins

These are some of the really useful plugins for vim:

* **NERDTree** : Shows a tree structure for the files and directories.
* **GitGutter** : Shows Git difference in the gutter.
* **Ctrl+P** : Easily navigate through recent files.

### vimrc ultimate configurations

[amix/vimrc](https://github.com/amix/vimrc) comes with the ultimate vim configuration, including all the above plugins and color and font stuff.

### vim navigation tips

* Use Ctrl + } to navigate to downwards, more logical.
* Use T + or F + to move directly to that word in the line.
* Navigation is done by the 'j', 'k', 'l', 'h' keys. Moving back and forth through words is done by the keys 'w', 'e', 'b'.