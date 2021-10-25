import { ideasReducer } from './ideas';
import { authReducer } from './auth';
import { combineReducers } from 'redux';
export default combineReducers({
	ideas: ideasReducer,
	auth: authReducer,
});
