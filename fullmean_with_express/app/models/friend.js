var FriendSchema = new mongoose.Schema({
  name: String,
  age: Number
})

mongoose.model('Friend', FriendSchema)