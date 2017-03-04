var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
	name: String,
	password: String,
	chore: String,
	choreImage: String
});

module.exports = mongoose.model("user", userSchema);

