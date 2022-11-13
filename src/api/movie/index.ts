import client from '../base';

import { Movie } from './types';

export const getMovieData = async (id: number) => {
	try {
		const { data } = await client.get<Movie>(`/movie/${id}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};
