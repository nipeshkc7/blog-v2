---
title: GCloud Commands
description: Useful gcloud commands manage Google Cloud Services
date: 2020-10-16T13:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Introduction

These are some useful GCloud commands, that can be used to manage and deploy your Google Cloud services.

#### Initialize GCloud

    gcloud init

This will let you log in from the browser and authenticate your Gcloud.

#### Deploy Cloud Run Services

To deploy your Cloud Run service the format is :

    gcloud run deploy <cloudRunServiceName> --image gcr.io/<project-id>/<container-name>:<tagOrSHA> --region <region> --platform <managedOrSthElse>

Example:

    gcloud run deploy ohc-app-staging --image gcr.io/ohc-guide-gcr/ohc-app:restrict-date-range --region us-central1 --platform managed

The `---region` and `--platform` arguments are optional.

#### List Images in the Container registry

    glcoud container images list --repository gcr.io/<project-id>

`--repository` parameter is optional, only use it if you want to list images from a different container repository.
