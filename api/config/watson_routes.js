var {start, processResponse} = require('../controllers/watson_controller'),
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    watsonController = require('../controllers/watson_controller')

//  /watson  routes
router.route('/')
    .get(start)



module.exports = router
