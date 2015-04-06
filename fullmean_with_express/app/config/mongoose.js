mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fullmean_friends')

var fs = require('fs')
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) 
	{
		console.log("LOADED MODEL", file)
		require(models_path + '/' + file)
	}
})