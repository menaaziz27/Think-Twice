const { loginValidation, registerValidation } = require('../validation/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res, next) => {
	const { firstName, lastName, email, password } = req.body;
	const { error } = registerValidation(req.body);
	if (error) {
		console.log(error.details[0].message);
		return res.status(400).send(error.details[0].message); //!
	}
	try {
		let existingUser = await User.findOne({ email: email });
		if (existingUser) {
			return res.status(403).json({ message: 'This email already exists' });
		}
		const hashedPassword = await bcrypt.hash(password, 8);
		const user = await User.create({ name: `${firstName} ${lastName}`, email, password: hashedPassword });
		const payload = {
			email: email,
			id: user._id,
			name: user.name,
		};
		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
		res.status(201).json({ user, token });
	} catch (e) {
		return next(e);
		// return res.status(500).json(e.message);
	}
};
exports.signin = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	const { error } = loginValidation({ email, password });
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(403).json({ message: 'User is not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "password don't match" });
		}

		const payload = {
			email: email,
			id: user._id,
			name: user.name,
		};
		const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 43200 });

		res.status(201).json({ user, token });
	} catch (e) {
		res.status(500).send(e);
	}
};
