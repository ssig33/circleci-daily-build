# CircleCI Daily Build
Kick CircleCI rebuild everyday

- https://github.com/shokai/circleci-daily-build

[![Circle CI](https://circleci.com/gh/shokai/circleci-daily-build.svg?style=svg)](https://circleci.com/gh/shokai/circleci-daily-build)


## Setup

### Get API Token

https://circleci.com/account/api

    % cp sample.env .env

edit `.env`


### Projects

    % cp sample.project-list.json project-list.json

edit `project-list.json`


### Build

    % npm i
    % npm run build


### Test

    % npm test


## Run

kick CircleCI from local machine.

    % npm start

dry-run

    % DRY=true npm start


## Deploy

kick CircleCI from Lambda

### Upload `bundle.zip` to AWS Lambda

    % npm run zip

http://aws.amazon.com/jp/lambda/


### Config Lambda

setup Scheduled Event

![scheduler](https://gyazo.com/c83deefbdad6849e78e64aa3ca889963.png)

done!
