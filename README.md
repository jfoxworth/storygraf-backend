# storygraf-backend

This repo is the node express server that serves as the back end for storygraf.

## Environment files

There are two demo .env files. The prod.env file contains the variables to run on the production server. The dev.env file contains the variable to run on the dev database. Copy the desired one into the .env file to run the code properly.

## Storage and deployment overview

The code is stored in github. It is deployed to AWS and the yaml file will store the code in an S3 bucket, deploy it to a lambda function, and build the API gateway needed for communication. A seperate RDS postgres database was built to store the info (one for dev and one for prod).

## Setting up the database(s) and making changes to it

There are three utility files that can be used to build the tables. The createTables file will create the tables (if needed) and update them if changes are needed. The line for any table that needs to be created/updated must be uncommented.

The dropTables and flushTables files will drop or wipe the contents of any desired table. Simple edit them to comment out the appropriate lines prior to running.

To affect changes on the AWS database(s), you must first ssh into the desired database and then run the desired file - createTables, dropTables, flushTables.

`ssh ubuntu@3.134.110.181 -L 8432:storygraf-database.c73n6t6oh3lq.us-east-2.rds.amazonaws.com:5432`

You can then run the code to create tables as follows:

`node createTables.js`

## Deploying the code

Right now, I am currently using AWS cloud formation. I am entering the commands to build and deploy the code as follows:

```aws cloudformation package --s3-bucket storygraf-backend --template-file template.yaml --output-template-file gen/template-generated.yaml --profile main --region us-east-2

```

```aws cloudformation deploy --template-file /Users/jfoxworth/sites/storygraf/storygraf-backend/storygraf-backend/gen/template-generated.yaml --stack-name storygraf-backend --profile main --region us-east-2 --capabilities CAPABILITY_IAM

```
