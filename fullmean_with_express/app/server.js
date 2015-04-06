var express = require('express') //load the framework
var bodyParser = require('body-parser') //for post data
var app = express()

app.use(bodyParser.json());
app.use(express.static(__dirname + './../assets'))
app.set('views', __dirname + '/views') 
app.set('view engine', 'ejs')

app.listen(8000);

require('./config/mongoose.js') //auto load models
require('./config/routes.js')(app) //load routes