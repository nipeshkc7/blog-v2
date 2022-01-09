---
title: Publishing a CLI tool to npm
description: A quick guide to publishing your cli tools to npm
date: 2022-01-10T13:00:00Z
tags:
- draft
layout: layouts/post.njk
feature_image: ''

---
Command-line tools are amazing. With npx, you can now create, publish and run a command-line tool within minutes. This will be a step-by-step guide that will show you how to do just that. By the end of this project, you should have an npm CLI tool up in the npm registry which you should be able to invoke from anywhere using `npx demo-npm-cli-tool` . So let's get started.

## Creating an npm project

First, initialize a new directory for your new npm package. This is no different from initializing any other node projects with npm. 

Create the directory and cd into it.

    $ mkdir demo-npm-cli-tool
    $ cd demo-npm-cli-tool.

Then, run the npm initialization command and follow the prompts.

    $ npm init

Follow the prompts to specify the package name, version, and so on. Alternatively, you could just skip the prompts and use the default values by using the command.

    $ npm init -y

By the end, you should have a `package.json` file which should look something like this:

    {
      "name": "demo-npm-cli-tool",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

The above values are the defaults if not explicitly defined. I recommend filling out all the fields present above including `description`, `keywords` and `author`. This will give better clarity to your npm project. Additionally, there are other fields, which although not necessary, are present in bigger projects like `bugs` which has the URL and email specifying where the issues should be reported. A complete list of all the fields and details can be found in the [npmjs docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json "npmjs docs"). 

## Creating a command-line tool

steps to create

## Publishing to npm

## Running your tool