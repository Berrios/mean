// sudo npm install express
var express = require("express");
var app = express();
var body_parser = require('body-parser')
//$this->load->library('form_validation');

//sudo npm install body-parser 
app.use(body_parser.urlencoded()) // this line is missing in the lean mean course
app.use(express.static(__dirname + '/static'))
app.set('views', __dirname + '/views') //creation of views folder and view file is missing
//sudo npm install ejs 
app.set('view engine', 'ejs') 

// //routes
app.get('/', function(request, response){
	response.send("<h1>:)</h1>")
})

app.get('/users', function(request, response){
	
	var users_array = [
		{name: "John", email: "jsupsupin@village88.com"},
		{name: "Michael", email: "michael@village88.com"},
		{name: "Kb", email: "kb@village88.com"}
	]
	//$this->load->view('users', array("users" => $users));
	response.render('users', { users: users_array })	
})

app.get('/main', function(request, response){
	response.redirect('/')
})

app.post('/add_user', function(request, response){
	console.log(request)
	console.log(request.body)
	var post_data = request.body
	console.log(post_data.email)
	console.log(post_data.name)
})
//end of routes

// app.listen(8000, function(){
// 	console.log("8000")
// })

var server = app.listen(8000, function(){
	console.log("8000")
})

// sudo npm install socket.io
var io = require('socket.io').listen(server)
// $("#loginform").on('click', '#send_button', function(){}) //jquery
io.sockets.on('connection', function(socket){
	console.log('user has connected connected')

	socket.on('send_messsage', function(data){
		console.log(data);
		socket.broadcast.emit('display_message', {submitted_message: data.message});
	})
	//socket.emit('sample_event', {event_name: 'test event'}) //current client
	//socket.broadcast.emit('sample_event', {event_name: 'test event'}) //others except current client
 	//io.emit('sample_event', {event_name: 'test event'}) //all
})
