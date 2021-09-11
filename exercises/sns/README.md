# decouple-serverless-apps - SNS

## Deployment Instructions

1. Change directory to this folder:
    ```
    cd sns
    ```
1. From the command line, use AWS SAM to deploy the AWS resources for the pattern as specified in the template.yml file:
    ```
    sam deploy --guided
    ```
1. During the prompts:
    * Enter a stack name
    * Enter the desired AWS Region
    * Allow SAM CLI to create IAM roles with the required permissions.

    Once you have run `sam deploy -guided` mode once and saved arguments to a configuration file (samconfig.toml), you can use `sam deploy` in future to use these defaults.

1. Note the outputs from the SAM deployment process. These contain the resource names and/or ARNs which are used for testing.

## Example payload from SNS

```
{
  "Type" : "Notification",
  "MessageId" : "12345678-2045-5567-8d78-1234567890",
  "TopicArn" : "arn:aws:sns:us-east-1:123456789012:SnsTopic-1234567890",
  "Subject" : "New message from publisher",
  "Message" : "Message at Wed Feb 11 2020 13:28:10 GMT+0000 (Coordinated Universal Time)",
  "Timestamp" : "2020-02-11T13:28:11.255Z",
  "SignatureVersion" : "1",
  "Signature" : "ks1BRXk41234567890ZvJWznlw1234567890rjioy/G4Br1234567890ll1JEVF1234567890jjyb/lPxIFg123456789025pbdlD2C1234567890L2L0cq2g1234567890afD5BAkbC1234567890+aHMG1234567890jmiMmhTl1234567890r1L9ENgT1234567890U+ROFyh12345678901WeFD1234567890PqpiR0A43T+6Cz7N1234567890wlzln4m5gAw123456781234567890YN/1234567890/1234567890+f/1234567890==",
  "SigningCertURL" : "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-1234567890636cd94b1234567890.pem",
  "UnsubscribeURL" : "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:123456789012:SnsTopic-1234567890:1234567890-88ee-4bf8-a788-1234567890"
}

```

### Testing

Use the [AWS CLI](https://aws.amazon.com/cli/) to invoke the Lambda function. The function name is in the outputs of the AWS SAM deployment (the key is `TopicPublisherFunction`):

1. Invoke the Lambda function to publish a message to SNS:

```bash
aws lambda invoke --function-name ENTER_YOUR_FUNCTION_NAME response.json
```

## Cleanup
 
1. Delete the stack
    ```bash
    aws cloudformation delete-stack --stack-name STACK_NAME
    ```
1. Confirm the stack has been deleted
    ```bash
    aws cloudformation list-stacks --query "StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus"
    ```
----
