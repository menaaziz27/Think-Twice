import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Container, Paper, Avatar, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style.js';
import Input from './Input';
import { signup, signin } from '../../actions/auth';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { AUTH } from '../../actionTypes';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
	const [formData, setFormData] = useState(initialState);
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const [isSignUp, setSignUp] = useState(true);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (isSignUp) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};

	const switchMode = () => {
		setSignUp(previusState => !previusState);
	};

	const googleSuccess = res => {
		const profile = res?.profileObj;
		const token = res?.tokenId;
		try {
			dispatch({ type: AUTH, payload: { profile, token } });
			history.push('/');
		} catch (e) {
			console.log(e);
		}
	};
	const googleFailure = error => {
		console.log(error);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} evaluation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && (
							<>
								<Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
								<Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
							</>
						)}
						<Input name="email" type="email" label="Email" handleChange={handleChange} />
						<Input name="password" type="password" label="Password" handleChange={handleChange} />
						{isSignUp && <Input name="confirmPassword" type="password" label="Repeat Password" handleChange={handleChange} />}
					</Grid>
				</form>
				<Button type="submit" className={classes.submit} fullWidth color="secondary" variant="contained" onClick={handleSubmit}>
					{isSignUp ? 'Sign Up' : 'Sign In'}
				</Button>
				<GoogleLogin
					clientId="92463467579-afeatd8kc7lejcd0fvpas5bj53lgjvis.apps.googleusercontent.com"
					render={renderProps => (
						<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
							Google Sign In
						</Button>
					)}
					onSuccess={googleSuccess}
					onFailure={googleFailure}
					cookiePolicy="single_host_origin"
				/>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Button onClick={switchMode}>{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default Auth;
