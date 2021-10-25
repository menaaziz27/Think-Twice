import { CREATE, GET, DELETE, VOTE } from '../actionTypes/index';
import * as api from '../api';
export const createIdea = idea => async dispatch => {
	try {
		const { data } = await api.createIdea(idea);
		dispatch({ type: CREATE, payload: data });
	} catch (e) {
		console.log(e);
	}
};

export const getIdeas = () => async dispatch => {
	try {
		const { data } = await api.getIdeas();
		dispatch({ type: GET, payload: data });
	} catch (e) {
		console.log(e);
	}
};

export const deleteIdea = idea => async dispatch => {
	try {
		const { data } = await api.deleteIdea(idea);
		dispatch({ type: DELETE, payload: data });
	} catch (e) {
		console.log(e);
	}
};

export const upvote = idea => async dispatch => {
	try {
		const { data } = await api.upvote(idea);
		dispatch({ type: VOTE, payload: data });
	} catch (e) {
		console.log(e);
	}
};
export const downvote = idea => async dispatch => {
	try {
		const { data } = await api.downvote(idea);
		dispatch({ type: VOTE, payload: data });
	} catch (e) {
		console.log(e);
	}
};
