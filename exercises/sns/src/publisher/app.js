const AWS = require('aws-sdk')
//AWS.config.region = process.env.AWS_REGION 
const sns = new AWS.SNS()

// The Lambda handler
exports.handler = async (event) => {
  // Params object for SNS
  const params = {
    Message: `Message at ${Date()}`,
    Subject: 'New message from publisher',
    TopicArn: process.env.SNStopic
  }
  
  // Send to SNS
  const result = await sns.publish(params).promise()
  console.log(result)
}