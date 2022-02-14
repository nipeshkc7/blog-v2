---
title: Working with Users, Groups and Permissions in Linux
description: A quick guide to working with users and groups in linux
date: 2021-11-19T13:00:00.000+00:00
tags:
- blog
layout: layouts/post.njk
feature_image: "/img/jpeg"

---
This is a quick guide to show you how to work with Users and Groups in Linux. Concepts will be similar across most distros as well on Macs since they're Unix-based.

## Users

By default, a system has a `root` user which has complete permission over the system. `root` users can add or remove other users. To add users:

    sudo useradd new-user

To log in as the new user, a password must be set up. To do that, use the command

    sudo passwd new-user

[This blog post]() does a great job of going in-depth about the user creation process.

## Groups

Users belong to groups. By default, `root` user will be under the `sudoers` group which will have, as the name implies `root` previliges. To add a new user to the sudoers group:

    usermod -aG sudo new-user

This will give user access to run sudo commands.

To list all the groups available in the system, use the command:

    groups

To add a new group

    sudo groupadd new_group

You can add new users to this group by simply

    usermod -ag new_group new-user

More information on groups and users [here](https://www.howtogeek.com/50787/add-a-user-to-a-group-or-second-group-on-linux/).

## File Permissions

Deciphering file permissions in linux can seem overwhelming, so here's a crash course.

To see file permissions run this command:

    ls -lah

This will show you a result that looks something like `drwxrwxrwx` with some dashes in the middle. Here's what it means:

* First `d` if present signifies if this is a directory or not.
* The `rwx` after show the owner's permissions in the file/directory where r means read, w means write and x means execute. The absence of permission is denoted by a `-`
* The `rwx` after that shows permissions for the group.
* The final `rwx` shows the permissions for all others.

As an example, `-rwxrw-r--` means this file has read, write and execute permissions for the owner, read and write permission for the group, and read permission for all others.

## Changing owners

Rule of thumb, the owner of a file will have the most permissions regarding reading, writing and executing. So sometimes you might come across a scenario where you might need to transfer ownership. To do that, simply use

    chown new_user filename

_Optional: Use `-R` flag for recursively changing all permissions inside a directory._

### Bonus: Nuclear option - 777

Not recommended, however, to open up permissions to everyone for a particular file or directory you can use the command:

    sudo chmod -R 777 directoryname

Similarly, different codes can be used for specifying different variations of permissions.