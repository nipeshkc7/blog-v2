---
title: DNS and Cloudflare
description: Tips about managing DNS
date: 2020-09-09T14:00:00Z
tags:
- devlogs
layout: layouts/post.njk

---
### Basics

Registrar will point to your nameservers and nameservers (eg Cloudflare nameservers) will point to your hosting provider.

* A record points to IP address
* CNAME points to another name eg 'nipeshkc7.github.io'
* AAAA points to IPV6 record

### Cloudflare

* Can be used to add A, CNAME, AAAA records etc.
* Can be used for free SSL
* Faster load times due to its CDN.

### GCP Cloud DNS

* Costs money, so instead use the registrar's DNS management or Cloudflare.

### Dig (DNS Lookup)

* Use tools like [Dig](https://toolbox.googleapps.com/apps/dig/) for DNS lookup (see DNS servers etc)