
### dev-run
ng server --port=4200

## Docket build
docker run --name myshop -d -p 8080:80 shopstore

## run docker image
docker build -t shopstore .

docker run --name myshop -d -p 8080:80 shopstore


Deploy stage

As mentioned at the beginning, we want to deploy the application to AWS. Though, this article does not cover provisioning AWS services such as S3, but focuses solely on the deployment to an existing AWS infrastructure.

Before we start with the pipeline job, we need to store the AWS access keys in the GitLab CI/CD variables. Open Settings > CI/CD >Variables in your GitLab project and add the following variables:

    AWS_ACCESS_KEY_ID: Add Access key ID of your IAM user
    AWS_SECRET_ACCESS_KEY: Add Secret access key of your IAM user
    