const joi = require('joi');

exports.registerValidation = data => {
	const schema = joi.object({
		firstName: joi.string().required(),
		lastName: joi.string().required(),
		email: joi.string().email().required(),
		password: joi.string().min(6).required().label('password'),
		confirmPassword: joi.any().equal().equal(joi.ref('password')).required().label('confirmPassword').messages({ 'any.only': 'password does not match' }),
	});

	return schema.validate(data);
};

exports.loginValidation = data => {
	const schema = joi.object({
		email: joi.string().email().required(),
		password: joi.string().min(6).required(),
	});

	return schema.validate(data);
};
