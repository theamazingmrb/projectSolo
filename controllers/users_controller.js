var User   = require('../models/user.js')

//Get /api/users
//INDEX to display all users
function index(req, res) {
  User.find({}, function(err, users){
  // return 404 is theres a error
  if(err) res.status(404).send(err)

  //otherwise respond with 200 success
  res.status(200).send(users)
  })
}

//POST /api/users
//Create User action
function create(req, res) {
  var user = new User(req.body)

  user.save(function(err, user){
    //return error ir error
    if(err) res.status(500).send(err)

    res.status(201).send(user)
  })
}

//Get /api/user/:id
//Show to ruturn a single user
function show(req, res) {
  User.find({_id: req.params.id},  function(err, user){
    //return 404 is theres a err
    if(err) res.status(400).send(err)

    //otherwise repond with selected user
    res.status(200).send(user)
  })
}

module.exports = {
      index: index,
      create: create,
      show: show,
      update: update
}
