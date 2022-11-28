import client from '../base';

import { Credits } from './types';

export const getMovieCredits = async (id: number) => {
	try {
		const { data } = await client.get<Credits>(`/movie/${id}/credits`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};
