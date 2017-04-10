var {index, create, show, update, destroy} = require('../controllers/users_controller')
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
      .delete(destroy)

module.exports = router
