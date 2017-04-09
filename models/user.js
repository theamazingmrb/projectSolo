var mongoose = require('mongoose')

//creates user schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

//sets variable for User
var User = mongoose.model('User', userSchema)

//exports module
module.exports = User
