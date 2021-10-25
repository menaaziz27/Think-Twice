import * as API from '../api';
import { AUTH } from '../actionTypes';

export const signup = (formData, history) => async dispatch => {
	try {
		const { data } = await API.signUp(formData);

		dispatch({ type: AUTH, payload: data });

		history.push('/');
	} catch (e) {
		console.log(e);
	}
};

export const signin = (formData, history) => async dispatch => {
	try {
		const { data } = await API.signIn(formData);
		dispatch({ type: AUTH, payload: data });
		history.push('/');
	} catch (e) {
		console.log(e);
	}
};
