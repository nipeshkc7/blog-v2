---
title: Working with Users and Groups in Linux
description: A quick guide to working with users and groups in linux
date: 2021-11-19T13:00:00Z
tags:
- blog
layout: layouts/post.njk
feature_image: ''

---
This is a quick guide to show you how to work with Users and Groups in Linux. Concepts will be similar across most distros as well on Macbooks.

## Users

By default, a system has a `root` user which has complete permission over the system. `root` users can add or remove other users. To add users:

    sudo useradd new-user

To log in as the new user, a password must be set up. To do that, use the command

    sudo passwd new-user