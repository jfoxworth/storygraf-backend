# make the s3 bucket to store the code
# run once and not needed again
aws s3 mb s3://storygraf-backend

# package cloudformation
aws cloudformation package --s3-bucket storygraf-backend --template-file template.yaml --output-template-file gen/template-generated.yaml --profile main

# deploy
aws cloudformation deploy --region us-east-2 --template-file gen/template-generated.yaml --stack-name storygraf-backend --capabilities CAPABILITY_IAM --profile main