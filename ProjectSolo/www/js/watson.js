// Example 1: sets up service wrapper, sends initial message, and
// receives response.
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: '498f9e6a-7707-4a25-a59e-8573df8ff30c', // replace with username from service key
  password: '1PlsddMMxnwK', // replace with password from service key
  path: { workspace_id: 'f47e9cc6-545e-4351-b234-ccf2c22d0053' }, // replace with workspace ID
  version_date: '2016-07-11'
});

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}
