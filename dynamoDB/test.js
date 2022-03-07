const AWS = require("aws-sdk");
const config = require('./config/config.js');

AWS.config.update(config.aws_remote_config);
const docClient = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: config.aws_table_name,
  Item: {
    "customer_id": "12MCX",
    "transaction_date": "2020-08-02",
    "item_category": "Book",
    "price": 18000
  }
};

const query = {
  TableName: config.aws_table_name,
}

const scan = {
  TableName: config.aws_table_name
}

docClient.scan(scan, (err, data) => {
  if ( err ) {
    console.log(err);
  } else {
    console.log('data', data);
  }
})