import client from '../base';

import { MoviesData } from './types';

const emptyData: MoviesData = {
	page: 1,
	results: [],
	total_pages: 1,
	total_results: 0,
};

export const getNowPlayingMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/now_playing?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};

export const getPopularMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/popular?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};

export const getTopRatedMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/top_rated?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};

export const getUpcomingMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/upcoming?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};

export const getSimilarMoviesData = async (movieId: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/${movieId}/similar`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};

export const getRecommendationsMoviesData = async (movieId: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/${movieId}/recommendations`);

		return data;
	} catch (error) {
		console.error(error);

		return emptyData;
	}
};
