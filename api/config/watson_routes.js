var {start, sendResponse} = require('../controllers/watson_controller'),
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    watsonController = require('../controllers/watson_controller')

//  /watson  routes
router.route('/')
    .get(start)
    .post(sendResponse)



module.exports = router
