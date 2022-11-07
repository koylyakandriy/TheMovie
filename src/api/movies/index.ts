import client from '../base';

import { MoviesData } from './types';

export const getNowPlayingMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/now_playing?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getPopularMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/popular?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getTopRatedMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/top_rated?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getUpcomingMoviesData = async (page: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/upcoming?page=${page}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getSimilarMoviesData = async (movieId: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/${movieId}/similar`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};

export const getRecommendationsMoviesData = async (movieId: number) => {
	try {
		const { data } = await client.get<MoviesData>(`/movie/${movieId}/recommendations`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};
