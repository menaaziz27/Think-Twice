const mongoose = require('mongoose');
require('dotenv').config();
mongoose
	.connect(process.env.Mongo_URI)
	.then(client => console.log('db connected'))
	.catch(err => console.log(err));
