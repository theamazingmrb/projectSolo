require('dotenv').config()
// Example 1: sets up service wrapper, sends initial message, and
// receives response.
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: process.env.USERNAME, // replace with username from service key
  password: process.env.PASSWORD, // replace with password from service key
  path: { workspace_id: process.env.WORKSPACE_ID }, // replace with workspace ID
  version_date: '2016-07-11'
});

// Start conversation with empty message.
// conversation.message({}, processResponse); original test

function start() {
conversation.message({}, processResponse)
console.log("conversations start")

}



// Process the conversation response.
function processResponse(err, response) {


  if (err) {
    console.error(err); // something went wrong
    return;
  }

  var endConversation = false;

  // Check for action flags.

  if (response.output.action === 'display_time') {
    // User asked what time it is, so we output the local system time.
    console.log('The current time is ' + new Date().toLocaleTimeString());
  } else if (response.output.action === 'end_conversation') {
    // User said goodbye, so we're done.
    console.log(response.output.text[0]);
    endConversation = true;
  } else {
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    // var newMessageFromUser = prompt('>> ');
    var newMessageFromUser = "hello";
    console.log(newMessageFromUser)
    conversation.message({
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse)
    newMessageFromUser = '';
  }
}

module.exports = {
  processResponse: processResponse,
  start: start
}
