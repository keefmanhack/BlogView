var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
		name: String,
		email: String,
		date: {type: Date, default: Date.now()},
		comment: String
});

module.exports = mongoose.model("Comment", commentSchema);