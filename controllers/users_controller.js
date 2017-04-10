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

//Patch /api/user/:id
//update specific user
function update(req, res) {
  User.findOne({_id: req.params.id}, function(err, user) {
    //throw error is theres a error
    if(err) res.status(400).send(err)
    // var user = user[0]
    //Only update specific changed fields of the user
    if(req.body.name) user.name = req.body.name
    if(req.body.email) user.email = req.body.email
    if(req.body.password) user.password = req.body.password
    console.log(user)
    user.save(function(err) {
    // return 500 if theres a error
    if(err) res.status(500).send(err)

    //otherwise respond with 200 success
    res.status(200).send(user)

    })
  })
}

function destroy(req, res) {
  User.remove({_id: req.params.id}, function(err, user) {
    if(err) res.status(500).send(err)

    //otherwise respond with 200 success
    res.status(200).send({message: "User deleted Successfully"})
  })
}

module.exports = {
      index: index,
      create: create,
      show: show,
      update: update,
      destroy: destroy
}
