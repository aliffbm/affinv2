var mongoose = require("mongoose");
var choreSchema = mongoose.Schema({
	name: String,
	tagline: String
});

module.exports = mongoose.model("chore", choreSchema);

