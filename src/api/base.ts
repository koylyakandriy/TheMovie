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

const Core = () => {
	const get: Request = async (url, data, config) => client.get(url, config);
	const put: Request = async (url, data, config) => client.put(url, data, config);
	const post: Request = async (url, data, params) => client.post(url, data, params);
	const remove: Request = async (url, data, config) => client.delete(url, config);

	return { remove, get, post, put };
};

export const request = Core();

// const getRequest: Request = async (url, data, config) => client.get(url, config);
// const putRequest: Request = async (url, data, config) => client.put(url, data, config);
// const postRequest: Request = async (url, data, params) => client.post(url, data, params);
// const deleteRequest: Request = async (url, data, config) => client.delete(url, config);

// export { deleteRequest, getRequest, postRequest, putRequest };
