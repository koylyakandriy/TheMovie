import axios from 'axios';

const client = axios.create({
	baseURL: import.meta.env.VITE_BASE_API_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

export default client;
