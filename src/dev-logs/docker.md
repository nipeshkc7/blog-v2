---
title: Docker
description: Docker Tips
date: 2020-08-11T14:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk
feature_image: img/docker.jpeg

---
### Tips

* When using alpine as the base image in a Dockerfile, remember you won't be able to use Debian commands like `sudo apt-install`
* 'docker-compose up' builds and runs the app, but might need to rebuild if you've made changes to the `dockerfile`
* Remember 'Docker' runs in an isolated environment and has no additional apps installed unless specified (like chromium for example).

### Common commands

1. List all containers :

       docker container ls -a
2. List all volumes:

       docker volume ls
3. Clear all unused images, containers, etc

       docker system prune
4. Delete all volumes using:

       docker volume rm $(docker volume ls -q)

_similar for containers_

### Dockerfile and docker-compose

Dockerfile specifies the actual image whereas docker-compose will help run multiple docker images using `docker-compose up`

Alternatively, you can run the docker image directly by using something like `docker run --publish 8080:8080 <container-id>`

### Use alpine where possible

Alpine ( [https://hub.docker.com/_/alpine](https://hub.docker.com/_/alpine "https://hub.docker.com/_/alpine") ) is a tiny Linux distribution ideal for dockerizing/productionizing your applications. This is great for languages like NodeJS. 

However, I've had my own gotcha moment with alpine when trying to run a compiled Rust binary in an Alpine container after multi-stage builds. Sounds good on paper, but there's more to it, you would need some low-level wizardry and expertise to make a typical binary run on Alpine container (it's small for a reason) using, and even if you could get it to run, it wouldn't be worth it as it will be negatively impacting performance. More on this: [https://andygrove.io/2020/05/why-musl-extremely-slow/](https://andygrove.io/2020/05/why-musl-extremely-slow/ "https://andygrove.io/2020/05/why-musl-extremely-slow/")