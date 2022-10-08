import axios from 'axios';

const { VITE_BASE_API_URL, VITE_API_KEY } = import.meta.env;

const client = axios.create({
	baseURL: VITE_BASE_API_URL,
	params: { api_key: VITE_API_KEY },
	headers: {
		'Content-type': 'application/json',
	},
});

export default client;
