const Idea = require('../models/Idea');
const User = require('../models/User');
const { ObjectId } = require('mongoose').Types;
exports.getIdeas = async (req, res) => {
	try {
		// console.log({ currentUser: req.user });
		const ideas = await Idea.find().sort({ createdAt: -1 });
		res.status(200).json(ideas);
	} catch (e) {
		res.status(500).send(e.message);
	}
};
exports.createIdea = async (req, res) => {
	const { content } = req.body;
	try {
		const idea = new Idea({ content, creator: req.name, userId: req.userId });
		await idea.save();
		res.status(201).json(idea);
	} catch (e) {
		res.status(500).send(e.message);
	}
};
exports.deleteIdea = async (req, res) => {
	const ideaId = req.params.id;
	try {
		const deletedIdea = await Idea.findByIdAndDelete(ideaId, { new: true });
		res.status(200).json(deletedIdea);
	} catch (e) {
		res.status(500).send(e.message);
	}
};

exports.upvote = async (req, res, next) => {
	const { id } = req.params;
	try {
		let idea = await Idea.findById(id);
		let downvotes = idea.downvotes.filter(vote => vote !== req.userId);

		const isCurrentUserExist = idea.upvotes?.find(idea => idea === req.userId);

		let updatedIdea;
		if (isCurrentUserExist) {
			updatedIdea = await Idea.findByIdAndUpdate(id, { $pull: { upvotes: req.userId }, downvotes }, { new: true });
		} else {
			updatedIdea = await Idea.findByIdAndUpdate(id, { $push: { upvotes: req.userId }, downvotes }, { new: true });
		}
		res.json(updatedIdea);
	} catch (e) {
		res.status(500).send(e.message);
	}
};

exports.downvote = async (req, res, next) => {
	const { id } = req.params;

	try {
		let idea = await Idea.findById(id);

		let upvotes = idea.upvotes.filter(vote => vote !== req.userId);

		const isCurrentUserExist = idea.downvotes?.find(idea => idea === req.userId);
		let updatedIdea;
		if (isCurrentUserExist) {
			updatedIdea = await Idea.findByIdAndUpdate(id, { $pull: { downvotes: req.userId }, upvotes }, { new: true });
		} else {
			updatedIdea = await Idea.findByIdAndUpdate(id, { $push: { downvotes: req.userId }, upvotes }, { new: true });
		}
		res.json(updatedIdea);
	} catch (e) {
		res.status(500).send(e.message);
	}
};
