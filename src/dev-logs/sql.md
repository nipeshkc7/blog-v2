---
title: SQL
description: Tips about SQL
date: 2020-09-28T15:00:00Z
tags:
- devlogs
layout: layouts/post.njk
feature_image: img/sql.jpeg

---
## Tips about SQL

### SQL Injection

DO NOT pass in parameters to an SQL query directly from user inputs as this can open you up to SQL injections.

For eg, if a user sends `id=1; SELECT 1=1;` and you pass this into your SQL query directly, this can open up your entire DB for the user to see, or maybe the user sends `id=1; DROP TABLE 'users'`

So always sanitize the user inputs;

### Node Mysql

You can pass in query params into a nunjucks template like done here: <Example>

Keep in mind, node-mysql flattens the arrays so you can pass in nested arrays as well.

### Data Types

* Use **decimals** for financial/precise data, floats are not appropriate as they won't store precise data.

  _`Usage:`_ `DECIMAL(6,2)` , where you can use 6 total digits, with 2 decimal places of precision. i.e from range 9999.99 to -9999.99.