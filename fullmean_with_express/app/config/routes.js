var friends = require('./../controllers/friends.js');

module.exports = function(app) {

	app.get('/friends', function(req, res) {
		friends.show(req, res)
	})

	app.post('/friend/new', function(req, res) {
	  	friends.new(req, res)
	})

	app.get('/', function(req, res){
		friends.index(req, res)
	})
}
