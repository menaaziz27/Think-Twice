import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/' });

api.interceptors.request.use(req => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
	}
	return req;
});

export const getIdeas = () => api.get('/ideas');
export const createIdea = idea => api.post('/ideas', idea);
export const deleteIdea = idea => api.delete(`/ideas/${idea._id}`);
export const signUp = formData => api.post('/auth/signup', formData);
export const signIn = formData => api.post('/auth/signin', formData);
export const upvote = idea => api.put(`/ideas/${idea._id}/upvote`);
export const downvote = idea => api.put(`/ideas/${idea._id}/downvote`);
