var express = require('express') //load the framework
var app = express()
var server = app.listen(8000);
var bodyParser = require('body-parser') //for post data

app.use(express.static(__dirname + './../assets'))
app.use(bodyParser.json());
app.set('views', __dirname + '/views') 
app.set('view engine', 'ejs')

require('./config/mongoose.js') //auto load models
require('./config/socketio.js')(server)
require('./config/routes.js')(app) //load routes