var {index, create, show, update} = require('../controllers/users_controller')
var express = require('express')
var router = express.Router()

//  /api/users routes
router.route('/')
      .get(index)
      .post(create)

// /api/users/:id
router.route('/:id')
      .get(show)
      .patch(update)

module.exports = router
