import axios from 'axios';

import { Request } from './types';

const { VITE_BASE_API_URL, VITE_API_KEY } = import.meta.env;

const client = axios.create({
	baseURL: VITE_BASE_API_URL,
	params: { api_key: VITE_API_KEY },
	headers: {
		'Content-type': 'application/json',
	},
});

client.interceptors.request.use(async (config) => ({
	...config,
}));

export default client;

const getRequest: Request = async (url, data, config) => client.get(url, config);
const putRequest: Request = async (url, data, config) => client.put(url, data, config);
const postRequest: Request = async (url, data, params) => client.post(url, data, params);
const deleteRequest: Request = async (url, data, config) => client.delete(url, config);

export { deleteRequest, getRequest, postRequest, putRequest };
