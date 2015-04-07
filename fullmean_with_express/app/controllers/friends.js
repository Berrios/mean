var Friend = mongoose.model('Friend')

module.exports = {
	show: function(req, res) {
		Friend.find(function(error, results){
			if(error)
				console.log(error)
			else{
				//trigger an event in the controller
				io.sockets.emit('get_friends', {message: 'success'})
				res.json(results)
			}
		})
	},
	new: function(req, res) {
		var friend = new Friend(req.body)

	  	friend.save( function(error, data){
		    if(error)
		        res.json(error)
		    else
	  			res.json(req.body)
		})
	},
	index: function(req, res) {
		res.render("friends")
	}
}