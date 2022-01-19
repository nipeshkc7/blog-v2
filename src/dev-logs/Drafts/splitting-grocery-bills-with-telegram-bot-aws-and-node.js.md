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

## Deploying to AWS using SAM

We'll deploy our resources to AWS using `SAM` command-line tool, which lets us build, test, and deploy our AWS resources using either a guided method or by manually specifying the resource template. In practical scenarios, most organizations use a resource template for deploying their resources. So we'll be using this method as this will prove more beneficial for those with already a basic knowledge of the cloud. If you want a beginner-friendly guide to deployments, please refer to this article: [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html").

First of all, we'll be organizing our project structure like this:

    TelegramBotServer
      |- template.yml
      |- BotHelper
          |-index.js

The `template.yml` will look like:

    AWSTemplateFormatVersion: '2010-09-09'
    Transform: AWS::Serverless-2016-10-31
    Description: A serverless function that listens to incoming webhooks from the Telegram Server 
    Resources:
      BotHelper:
        Type: AWS::Serverless::Function
        Properties:
          Handler:  BotHelper/index.handler
          Runtime: nodejs14.x
          Events:
            TelegramServiceAPI:
              Type: Api
              Properties:
                Path: /message
                Method: GET

Before we start using deploy commands, we'll need to set up some configurations in our local environment. The following environment variables should be present before using the deploy commands:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_REGION`

The access keys should be generated from a console which ideally should be associated with an IAM role. However, keys from a root user also work but it is not recommended.

You can use these commands to set it up in your Mac/Linux:

    export AWS_ACCESS_KEY_ID=your_access_key_id
    export AWS_SECRET_ACCESS_KEY=your_secret_access_key

For windows, you can replace `export` with `set`.

You can now validate your template.yml file using the command `sam validate --region ap-southeast-2` which should hopefully tell you that you have a valid template. If not, investigate the details of the error. For the deployment operations,  we'll need to create an s3 bucket using the command:

    aws s3 mb s3://telegram-bot-deployement-bucket --region ap-southeast-2

To verify it's been created, you can list all s3 buckets using `aws s3 ls` command.

After that, we need to package our code using:

    sam package \                                                  
    --template-file template.yml \     
    --output-template-file package.yml \
    --s3-bucket telegram-bot-deployement-bucket \                                 
    --region ap-southeast-2

Then we can deploy using:

    sam deploy \                                                                                                                   
    --template-file package.yml \
    --stack-name jesus-stack \    
    --capabilities CAPABILITY_IAM \
    --region ap-southeast-2

We have to explicitly specify that we are okay with creating an IAM-related resource using the `--capabilities` argument.