const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');
const ideaRoutes = require('./routes/idea');
require('./utils/db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoutes);
app.use('/ideas', ideaRoutes);
app.use(homeRoutes);

app.use((error, req, res, next) => {
	console.log(error.message);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

module.exports = app;
