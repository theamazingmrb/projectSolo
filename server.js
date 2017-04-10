var express   = require('express'),
	app         = express(),
	logger      = require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose    = require('mongoose'),
	port        = process.env.PORT || 3000,
	userRoutes  = require('./config/user_routes.js')

//connect with mongoose db
mongoose.connect('mongodb://localhost/projectsolo')

//log request made to the app
app.use(logger('dev'))

//make json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//mount user routes at /api/users
app.use('/api/users', userRoutes)

//run the web server
app.listen(port, function(){
	console.log('Server started on', port)
})
