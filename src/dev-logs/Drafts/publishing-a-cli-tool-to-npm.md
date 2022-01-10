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

    A
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

The above values are the defaults if not explicitly defined. I recommend filling out all the fields present above including `description`, `keywords` and `author`. This will give better clarity to your npm project. Additionally, there are other fields, which although not necessary, are present in bigger projects like `bugs` which has the URL and email specifying where the issues should be reported. A complete list of all the fields and details can be found in the [npmjs docs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json "npmjs docs").

Additionally, you will want a `bin` property as well, we'll get into the why in the later parts of this article.

    "bin": "./index.js"

## Creating a command-line tool

We will be creating a simple command-line tool that prompts the user for a pokemon name and displays its types using the pokemon API. To get user prompts we'll be using Inquirer.js which lets you easily build beautiful command-line interfaces.

In your `index.js` add the following code:

    #!/usr/bin/env node
    
    const inquirer = require('inquirer');
    const axios = require('axios');
    
    inquirer
      .prompt([
        {
          type: "question",
          name: "pokemonName",
          message: "Name of pokemon",
          default: "pikachu"
        }
      ])
      .then(async (answers) => {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${answers.pokemonName}`)
          console.log(res.data.types.map(type => type.type.name));
        } catch (err) {
          console.log("Pokemon not found, try again");
        }
      })

Let's go through the code, the first line `#!/usr/bin/env node` is called a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix) "shebang") line, which tells a Unix like system what executable to use to run the script, which in this case is `node`.

Then we'll use the `inquirer` package to get input from the user, currently, the input type is a question, but you can also have lists, checkboxes, and many more.

Then we can get the user answers which for the purposes of this program, we'll append to the API request. Then we can use `console.log` to display the result back to the user.

## Publishing to npm

Now that we have our npm tool up and running, the next step is to publish it. This can be achieved with two simple steps.

1. Login to npm using `npm login` and follow the prompts.
2. Run `npm publish`

And there you have it, your package should be available at [https://www.npmjs.com/](https://www.npmjs.com/ "https://www.npmjs.com/").  

## Running your tool