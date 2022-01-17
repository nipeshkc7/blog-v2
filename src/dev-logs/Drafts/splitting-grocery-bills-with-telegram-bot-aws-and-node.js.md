---
title: Splitting Grocery bills with Telegram Bot, AWS and Node.js
description: A telegram bot that splits bills between individuals.
date: 2022-01-16T13:00:00Z
tags:
- draft
layout: layouts/post.njk
feature_image: ''

---
Splitting bills and payments between housemates can be a touchy subject. Debates and disagreements might ensue causing rifts. Faulty manual calculations of who owes what might accidentally have someone paying more or less than what they actually owe. So why not leave the manual and thankless task of tedious calculations and notifying flatmates of what they owe and to whom, to technology. By the end of this article, you will have a telegram bot up and running in an AWS lambda function that does these calculations simply based on telegram messages.

## Existing solutions

Although there are plenty of existing apps and services that have tackled this particular problem, I'm afraid that they've grown and become so complicated that frankly just splitting grocery bills can seem like you're rewiring a supercomputer. So for the sake of simplicity, our solution will simply consist of a telegram chat group, a serverless function, and a database running on AWS.

## Architecture

The main parts of the architecture will be:

* AWS Lambda function: To process and send messages to telegram via the bot's API
* DynamoDB: To Store / keep track of the amount owed by each person.
* API Gateway: As the name suggests, an API pathway to interface with the lambda function.