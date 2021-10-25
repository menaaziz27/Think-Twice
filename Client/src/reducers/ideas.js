import { CREATE, DELETE, GET, VOTE } from '../actionTypes';
export const ideasReducer = (state = [], action) => {
	switch (action.type) {
		case CREATE:
			return [action.payload, ...state];
		case GET:
			return action.payload;
		case DELETE:
			return state.filter(idea => idea._id !== action.payload?._id);
		case VOTE:
			return state.map(idea => (idea._id === action.payload._id ? action.payload : idea));
		default:
			return state;
	}
};
