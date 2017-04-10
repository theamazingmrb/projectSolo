var {index, create, show, update, destroy} = require('../controllers/users_controller'),
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    usersController = require('../controllers/users_controller'),
    token = require('./token_auth')







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
