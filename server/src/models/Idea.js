const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaModel = new Schema(
	{
		creator: String,
		userId: String,
		content: String,
		upvotes: {
			type: [String],
			default: [],
		},
		downvotes: {
			type: [String],
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

const Idea = mongoose.model('Idea', ideaModel);
module.exports = Idea;
