
// The Lambda handler
exports.handler = async (event) => {
  console.log(JSON.stringify(event, 2, null))
  throw new Error('Testing exceptions in lambda consumer of SNS notifications')
}