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
* API Gateway: As the name suggests, an API pathway to interface with the lambda function. Lambda by default does not generate an API that can be invoked.

## Defining AWS resources using SAM

We'll deploy our resources to AWS using `SAM` command-line tool, which lets us build, test, and deploy our AWS resources using either a guided method or by manually specifying the resource template. In practical scenarios, most organizations use a resource template for deploying their resources. So we'll be using this method as this will prove more beneficial for those with already a basic knowledge of the cloud. If you want a beginner-friendly guide to deployments, AWS has an awesome guide: [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html").

First of all, we'll be organizing our project structure like this:

    TelegramBotServer
      |- template.yml
      |- BotHelper
          |-index.js
          |-db.js
          |-processMessages.js

Inside the BotHelper, `index.js` will be the entry point of the function, `db.js` will handle database CRUD operations and `processMesssages.js` will use regex to parse the input messages and process them accordingly.

To deploy our AWS cloud infrastructure, we'll be using a YAML file that will contain the AWS Serverless Application Model (SAM) specifications. This template will tell AWS how to deploy our combination of resources including Lambda function, API Gateway, and DynamoDB. This `template.yml` will look like:

    AWSTemplateFormatVersion: "2010-09-09"
    Transform: AWS::Serverless-2016-10-31
    Description: A serverless function that listens to incoming webhooks from the Telegram Server
    Resources:
      TelegramBot:
        Type: AWS::Serverless::Function
        Properties:
          Handler: BotHelper/index.handler
          Runtime: nodejs14.x
          Timeout: 60 
          Environment:
            Variables:
              TABLE_NAME: People
          Policies:
            - DynamoDBCrudPolicy:
                TableName: People
          Events:
            TelegramServiceAPI:
              Type: Api
              Properties:
                Path: /message
                Method: POST
      TelegramBotInvokePermission:
        Type: AWS::Lambda::Permission
        Properties:
          Action: lambda:InvokeFunction
          FunctionName:
            Fn::GetAtt:
              - TelegramBot
              - Arn
          Principal: apigateway.amazonaws.com
          SourceArn:
            Fn::Sub: arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:*/*/*/*
      PeopleRecords:
        Type: AWS::DynamoDB::Table
        Properties:
          TableName: People
          AttributeDefinitions:
            - AttributeName: id
              AttributeType: S
          KeySchema:
            - AttributeName: id
              KeyType: HASH
          ProvisionedThroughput:
            ReadCapacityUnits: 5
            WriteCapacityUnits: 5

In the YAML file we define these resources:

* **TelegramBot**: Our Lambda function with Node 14 runtime, the handler file. Also, we specify the timeout as 60 seconds. This is important to note since by default the timeout in serverless functions is 3 seconds which isn't enough for the operations we'll be performing. We also add environment variables like `TABLE_NAME` which is our DynamoDB table name. We also add policies that allow the function to make updates to the database. Optionally, we can limit the concurrency using the `ReservedConcurrentExecutions` property which by default is 1000. The function will be triggered by a POST API endpoint `/message` which we define in the file using the `Events` property.
* **API Gateway:** This gateway will trigger the Lambda function so we must explicitly provide a function invoke permission (`lambda:InvokeFunction`) which in the above file is called `TelegramBotInvokePermission`
* **PeopleRecords:** The DynamoDB will act as our store which will have a primary key called `id` which will be used to uniquely identify our resource. You can also explicitly specify properties like read/write capacities to 5 consistent reads/writes per second.

## Setting Up a telegram bot

To set up a telegram bot, well, there's a bot for that. It's called Botfather (get it?). You can access Botfather via [https://telegram.me/BotFather](https://telegram.me/BotFather "https://telegram.me/BotFather"). There you can use commands to create your bot.

Your interactions should look something like this:

<screenshot>

At the end of the process, you should get a unique **secret** **token** that you will use to communicate with the bot. A full list of commands accepted by the bot can be found at [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api "https://core.telegram.org/bots/api"). We'll be communicating via HTTP requests.

Now we'll need to specify the webhook for the bot. This is basically asking Telegram to call our Lambda function with bot related events. We're more interested in the group chat messages. We can set up our webhook using the following curl command:

    curl --request POST \
    --url https://api.telegram.org/bot<TELEGRAM_TOKEN>/setWebhook\
    --header 'content-type: application/json'\
    --data '{"url": "<LINK_TO_YOUR_LAMBDA_API>"}'

Additionally, you might need to set your bot's privacy credentials using `/BotFather` . This will enable us to read group messages. For this, use the command `/setprivacy`:

<screenshot>

Next, you need to create a telegram group with all the members including your bot. And using our lambda function, we'll receive all the chat messages via the webhook.

## Programming the bot

Now for the fun part, we're going to program the bot so that it reads messages from the chat group where people will share how much they spent and on what. We will then take that chat message, and using regex store the `amount` text in our Dynamo DB database which will be our source of truth for who spent what. We will then return a message back to the user specifying who owes how much, and to whom.

## Deploying to AWS

Before we start using deploy commands, we'll need to set up some configurations in our local environment. The following environment variables should be present before using the deploy commands:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_REGION`

The access keys should be generated from a console which ideally should be associated with an IAM role. However, keys from a root user also work but it is not recommended.

Alternatively, you can use the `aws configure` command to set up these environment variables.

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
    --stack-name telegram-service-stack \    
    --capabilities CAPABILITY_IAM \
    --region ap-southeast-2

We have to explicitly specify that we are okay with creating an IAM-related resource using the `--capabilities` argument.

Since you'll probably be packaging and deploying it together, to save us some time, we can use an alias for deployments using:

    alias deployx='sam package --template-file template.yml --output-template-file package.yml --s3-bucket telegram-bot-deployement-bucket --region ap-southeast-2'

So next time you can deploy using `deployx`