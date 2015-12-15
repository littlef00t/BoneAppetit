# Schema Information

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | string    | not null
puppy_id    | integer   | not null, foreign key (references users), indexed

## dishes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dish_name   | string    | not null
description | string    | not null
puppy_id    | integer   | not null, foreign key (references users), indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
