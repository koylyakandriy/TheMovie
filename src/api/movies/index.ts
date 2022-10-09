import client from '../base';

export const getLatestMoviesData = async () => {
	try {
		const { data } = await client.get('/movie/latest');

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getPopularMoviesData = async () => {
	try {
		const { data } = await client.get('/movie/popular');

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getTopRatedMoviesData = async () => {
	try {
		const { data } = await client.get('/movie/top_rated');

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getUpcomingMoviesData = async () => {
	try {
		const { data } = await client.get('/movie/upcoming');

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};
