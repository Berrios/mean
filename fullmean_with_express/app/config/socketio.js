
module.exports = function(server) {
	io = require('socket.io').listen(server) //we are going to make io as global, don't put var before it

	io.sockets.on('connection', function(socket){
		console.log("a client has connected")
		socket.on('disconnect', function() {})
	})
}

