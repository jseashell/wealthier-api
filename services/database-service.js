// ./services/database-service.js

process.env.AWS_SDK_LOAD_CONFIG = true; // This env var doesn't work in the .env file, see https://stackoverflow.com/a/44699094/6194785
const AWS = require('aws-sdk');

exports.scan = () => {
  const params = {
    TableName: 'wealthier',
    ExpressionAttributeNames: {
      '#n': 'name',
    },
    ProjectionExpression: 'user_id, #n, expenses, incomes, debts',
  };

  const dbClient = new AWS.DynamoDB();
  return dbClient.scan(params).promise();
};

exports.getItem = (userId) => {
  const params = {
    TableName: 'wealthier',
    Key: {
      user_id: { S: userId },
    },
    ExpressionAttributeNames: {
      '#n': 'name',
    },
    ProjectionExpression: 'user_id, #n, expenses, incomes, debts',
  };

  const dbClient = new AWS.DynamoDB();
  return dbClient.getItem(params).promise();
};
