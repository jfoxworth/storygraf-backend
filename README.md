# storygraf-backend

This repo is the node express server that serves as the back end for storygraf.

## Environment files

There are two demo .env files. The prod.env file contains the variables to run on the production server. The dev.env file contains the variable to run on the dev database. Copy the desired one into the .env file to run the code properly.

## Storage and deployment overview

The code is stored in github. It is deployed to AWS and the yaml file will store the code in an S3 bucket, deploy it to a lambda function, and build the API gateway needed for communication. A seperate RDS postgres database was built to store the info (one for dev and one for prod).

## Setting up the database(s) and making changes to it

There are three utility files that can be used to build the tables. The createTables file will create the tables (if needed) and update them if changes are needed. The line for any table that needs to be created/updated must be uncommented.

The dropTables and flushTables files will drop or wipe the contents of any desired table. Simply edit them to comment out the appropriate lines prior to running.

On the main level, you can run the code to create tables as follows:

`node src/utils/database/createTables.js`

Note that you do not have to tunnel in to anything as there is not EC2 instance holding the database.

### Initial database creation

As part of the initial setup, the psql command was used to create the database on the AWS server

`psql --host=storygraf-database.c73n6t6oh3lq.us-east-2.rds.amazonaws.com --port=5432 --username=postgres --password`

`psql> create database "storygraf-database";`

## Deploying the code

Deployment can be accomplished through standard Cloud Formation or through SAM. Since SAM is the newest and greatest method, those should be the default.

`aws cloudformation package --s3-bucket storygraf-backend --template-file template.yaml --output-template-file gen/template-generated.yaml --profile main --region us-east-2`

`aws cloudformation deploy --template-file /Users/jfoxworth/sites/storygraf/storygraf-backend/storygraf-backend/gen/template-generated.yaml --stack-name storygraf-backend --profile main --region us-east-2 --capabilities CAPABILITY_IAM`

```
sam package \
  --template-file template.yaml \
  --output-template-file package.yml \
  --s3-bucket storygraf-backend --profile main --region us-east-2
```

```
sam deploy \
  --template-file package.yml \
  --stack-name storygraf-backend \
  --capabilities CAPABILITY_IAM --profile main --region us-east-2
```
