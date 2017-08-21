## Serverless Boilerplate ##
[Serverless](https://serverless.com/) is a framework to easily use different microservices providers. I provide a custom version with different tools that I normally use every time I create a new Serverless Project.

Such tools are:

 - MongoDB (ready to use, with some functions created to provide ease of use)
 - WebPack (Serverless Webpack plugin is needed for local debug)
 - Request-Promise (This package is used to fetch content from websites)
 - Cheerio (Package to easily parse web contents)

**Installation**
```sh
$ git clone https://github.com/joadr/serverless-boilerplate [name of your app]
$ cd [name of your app]
$ rm -rf .git
$ yarn
$ serverless webpack invoke --function sayHello
```

**Config Mongo & Amazon AWS**

In order to use MongoDB you must create a file called env.yml which sets environment variables in your service provider. Then just provide the credentials there like below:
```
MONGO_URL: mongodb://user:password@server:port/databaseName
ACCESS_KEY_ID: AKIXJLVX0FZMCG45UEYA
SECRET_ACCESS_KEY: Rk8oUpBT7Ev/IWCkfhZOdcKacRYNkFa9/H2/n1QR
BUCKET: bucket
REGION: us-east-1
```
