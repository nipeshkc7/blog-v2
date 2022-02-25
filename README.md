# Blog V2
[![Netlify Status](https://api.netlify.com/api/v1/badges/59dc1d51-a011-4edb-9b7a-89f0b8530b28/deploy-status)](https://app.netlify.com/sites/arpansblogv2/deploys)

Version 2 of my personal blog based on the Eleventy starter template

# Installing

```bash
# From Source
git clone https://github.com/nipeshkc7/blog-v2.git
cd blog-v2 
```

Then install dependencies

```bash
yarn
```

# Running

Start the development server

```bash
yarn start
```

You now have a completely static site pulling content from Ghost running as a headless CMS.

By default, the starter will populate content from a default Ghost install located at https://eleventy.ghost.io.

To use your own install, edit the `.env` config file with your credentials. You can find your `contentApiKey` in the "Integrations" screen in Ghost Admin. The minimum required version for Ghost is `2.10.0` in order to use this starter without issues.

# Optimising

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Eleventy front-end becomes the source of truth for SEO.

# Extra options

```bash
# Build the site locally
yarn build
```

# Copyright & License

Copyright (c) 2021 Arpan KC - Released under the [MIT license](LICENSE).
