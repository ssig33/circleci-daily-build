# CircleCI Daily Build

- https://github.com/shokai/circleci-daily-build


## Get API Token

https://circleci.com/account/api

    % cp sample.env .env

edit `.env`


## Build

    % npm i
    % npm run build


## Test

    % npm test


## Upload `bundle.zip` to AWS Lambda

    % npm run zip

http://aws.amazon.com/jp/lambda/


## Config Lambda

setup Scheduled Event

![scheduler](https://gyazo.com/c83deefbdad6849e78e64aa3ca889963.png)

done!
