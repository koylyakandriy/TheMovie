import { AxiosInstance } from 'axios';

import client from '../base';
import { Request } from '../types';

export class Core {
	private client: AxiosInstance;

	constructor() {
		this.client = client;
	}

	get: Request = async (url, data, config) => this.client.get(url, config);

	put: Request = async (url, data, config) => this.client.put(url, data, config);

	post: Request = async (url, data, params) => this.client.post(url, data, params);

	delete: Request = async (url, data, config) => this.client.delete(url, config);
}

// const Method = {
// 	get: Request = async (url, data, config) => client.get(url, config),
// 	put: async (url, data, config) => client.put(url, data, config),
// 	post: async (url, data, params) => client.post(url, data, params),
// 	delete: async (url, data, config) => client.delete(url, config)
// }

// export default Method
