require('dotenv').config()
// Example 1: sets up service wrapper, sends initial message, and
// receives response.
var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');


// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: process.env.USERNAME, // replace with username from service key
  password: process.env.PASSWORD, // replace with password from service key
  path: {
    workspace_id: process.env.WORKSPACE_ID
  }, // replace with workspace ID
  version_date: '2016-07-11'
});

// Start conversation with empty message.
// conversation.message({}, processResponse); // original test

function start(req, response) {
  conversation.message({}, processResponse)
  // console.log("BE : conversation successfully started")
  // response.status(200).json({
  //   text: response.output
  // })
  // console.log(response.output)
}
//response in terminal/console will be "Welcome to SOLO"


function sendResponse(req, res) {
  console.log(req.body.message)
  // res.json({message: "About to send this shit to watson..."})
  conversation.message({
    input: {
      text: req.body.message
    },
    // Send back the context to maintain state.
    context: req.body.context,
  }, function(err, response) {
    if (err) {
      console.log(err); // something went wrong
      return;
    }

    var endConversation = false;
    // Check for action flags.

    if (response.output.action === 'display_time') {
      // User asked what time it is, so we output the local system time.
      res.json({message: 'The current time is ' + new Date().toLocaleTimeString()})
      // response.status(200).json({text : "'The current time is ' + new Date().toLocaleTimeString()"})
    } else if (response.output.action === 'end_conversation') {
      // User said goodbye, so we're done.
      res.json({message: response.output.text[0]});
      // response.status(200).json({text: response.output.text[0]});
      endConversation = true;
    } else {
      // Display the output from dialog, if any.
      if (response.output.text.length != 0) {
        // res.json({message: "BE : " + response.output.text[0]});
        // If we're not done, prompt for the next round of input.
        // ===========================================
      if (!endConversation) {
        var newMessageFromUser = req.body.message;
        conversation.message({
          input: { text: newMessageFromUser },
          // Send back the context to maintain state.
          context : response.context,
        }, function(err, response){
          processResponse(err, response, res)
        })
      }

      }
    }

  })
}
// =============================================
///////////////////////////TEST
// Process the conversation response.
function processResponse(err, response, res) {
console.log(response.output.text.join(' '))
res.json({context: response.context, responseText: response.output.text.join(' ') })

  if (err) {
    console.error(err); // something went wrong
    return;
  }

  var endConversation = false;

  // Check for action flags.

  if (response.output.action === 'display_time') {
    // User asked what time it is, so we output the local system time.
    return ('The current time is ' + new Date().toLocaleTimeString())
    // response.status(200).json({text : "'The current time is ' + new Date().toLocaleTimeString()"})
  } else if (response.output.action === 'end_conversation') {
    // User said goodbye, so we're done.
    return (response.output.text[0]);
    // response.status(200).json({text: response.output.text[0]});
    endConversation = true;
  } else {
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
      return ("BE : " + response.output.text[0]);
    }
  }
}

  // If we're not done, prompt for the next round of input.
  // if (!endConversation) {
  //   var newMessageFromUser = req.body;
  //   // var newMessageFromUser = "bye";
  //
  //   console.log("BE: " + newMessageFromUser)
  //
    // conversation.message({
    //   input: {
    //     text: newMessageFromUser
    //   },
    //   // Send back the context to maintain state.
    //   context: response.context,
    // }, processResponse)
    // // console.log(response.context)
  //
  // }
// }
module.exports = {
  start: start,
  sendResponse: sendResponse
}
