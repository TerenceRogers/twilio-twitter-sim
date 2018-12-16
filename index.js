const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const args = process.argv.slice(2);

let tweetId = '';
let tweetUrl = '';

switch (args[0]) {
  case '1': {
    tweetId = '1072497864889253894';
    tweetUrl = 'https://twitter.com/Admin1Galore/status/1072497864889253894';
    break;
  }
  case '2': {
    tweetId = '1072939708479664128';
    tweetUrl = 'https://twitter.com/Admin1Galore/status/1072939708479664128';  
    break;  
  }
}

console.log('Creating Twilio Twitter task');
client.taskrouter.workspaces('WS7a8c953e8c976a3af79e0479071d67b5')
  .tasks
  .create({ attributes: JSON.stringify({
    type: 'twitter',
    tweetId,
    tweetUrl
  }), workflowSid: 'WW35e99191dbfcce0b2eadc4b5401848be'})
  .then(task => console.log('Task created, SID:', task.sid))
  .done();