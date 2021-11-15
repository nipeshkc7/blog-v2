---
title: Git
description: Important notes about github
date: 2020-08-10T14:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk

---
This is a collection of important notes gathered throughout working on various projects and contributing to Open-Source repositories.

## Git

### Squashing multiple commits into one.

When you have multiple commits in a branch, you can 'squash' them into a single one.

1\. Use git rebase to generate a new commit, for example (if you have 2 previous commits)

    git rebase --interactive HEAD~2

This opens up the last 2 commits in your editor (probably vim)

2\. In the editor, replace 'pick' with 'squash' for all except the first commits. (At this point you will have a commit with a long commit message)

3\. Change commit message with the following command.

    git commit --amend

This opens up vim again, where you can update the commit message

Reference: \[link\]([https://www.internalpointers.com/post/squash-commits-into-one-git](https://www.internalpointers.com/post/squash-commits-into-one-git "https://www.internalpointers.com/post/squash-commits-into-one-git"))

### Making local master exactly same as origin

    git fetch origin
    git reset --hard origin/master

However **DO NOT** hard reset when on a separate branch. If so, do a reflog to view the commit before the 'reset', and hard reset into that commit.

    git reflog

Then find the commit hash and reset.

    git reset --hard <commit-hash>

Or, better way to update local master, **rebase**:

    git fetch
    git pull --rebase origin master

or

    git fetch
    git rebase origin/master

### Git rebase vs Git merge

Git rebase, carries all the commits of a feature branch and puts it infront of master when you use the commands:

    git checkout feature-branch
    git rebase master

puts all the commits in the feature branch infront of master.

While when you merge a master branch like so:

    git checkout feature-branch
    git merge master

You are adding changes from the master branch to the feature branch, and you will need a new commit for the merged changes.

Keep in mind that, merge is a non-destructive command while rebase is a destructive command.

More info on this link([https://www.atlassian.com/git/tutorials/merging-vs-rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing "https://www.atlassian.com/git/tutorials/merging-vs-rebasing"))

### What is origin/master?

origin/master is the local copy of branch 'master' on remote named 'origin'

Example:

    git fetch origin master

Or

    git fetch

This command copies the 'master' branch from 'origin' and the local copy will be named origin/master

So git fetch basically updates local copy (in this case origin/master).

### If you need to force push a sub-module/sub-repository into your own git

    git rm -rf --cached path/to/submodule 
    git add path/to/submodule/. 

Source: [https://stackoverflow.com/questions/40921904/force-adding-submodule-contents-in-git](https://stackoverflow.com/questions/40921904/force-adding-submodule-contents-in-git "stackoverflow")

### Switching to a remote branch

    git switch <remote_branch>