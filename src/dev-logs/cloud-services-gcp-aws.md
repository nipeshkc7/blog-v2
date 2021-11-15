---
title: Cloud Services (GCP/AWS)
description: Tips/Issues on GCP/AWS
date: 2020-08-11T14:00:00.000+00:00
tags:
- devlogs
layout: layouts/post.njk

---
# Google Cloud Platform

### Cloud Run

Cloud Run lets you run stateless containers that scale up very nicely. You don't have to pay anything until you start getting millions of requests. However, CloudSQL does cost money from the start, (its a way of introducing states in the app)

### Cloud Pub/Sub

Lets you publish to a topic, and cloud pub/sub automatically pushes the message to all the subscribers(client apps in most cases). The advantage is, it lets you set up any number of subscribers to a single event.

#### cloud-builds pubsub topic:

Cloud build notifications are by default sent to `cloud-builds` topic, which you can create. And you can use the `cloud-builds` topic to trigger cloud function invocations for stuff like [slack notifications](https://gist.github.com/nipeshkc7/37e70e104c658b1d5b331ccd85cc1775).

### Weird issue on GCP

Trying to add environment variable 1, GCP sets it to '1' automatically.

### Build once deploy many times

Build and push a project to one place(eg. dockerize on a separate GCR account) and from there, you can deploy to several environments (staging or production).

#### How to do this for Cloud Run Applications?

Detailed guide at [https://cloud.google.com/run/docs/deploying#other-projects](https://cloud.google.com/run/docs/deploying#other-projects "https://cloud.google.com/run/docs/deploying#other-projects").

* Add a new service account in the GCR project with **Storage Object Viewer** permission for an email address (something like **@serverless-robot-prod.iam.gserviceaccount.com)** obtained from the staging or prod account (wherever you want to deploy).

# Azure Platform

Types of services offered by Azure:

* Compute (App Service, Service Fabric, Container deployment/k8s)
* Messaging (Pub/sub type messaging, async messaging)
* Data Store (Azure storage, CosmosDB/NoSQL, AzureSQL/SQL)