import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import {
	getNowPlayingMoviesData,
	getPopularMoviesData,
	getSimilarMoviesData,
	getTopRatedMoviesData,
	getUpcomingMoviesData,
	QUERY_KEYS,
} from '../../api';
import { getRecommendationsMoviesData } from '../../api/movies';
import { MoviesData } from '../../api/movies/types';

type QueryName = keyof typeof QUERY_KEYS;

const requestMap: Partial<Record<QueryName, any>> = {
	popularMovies: getPopularMoviesData,
	nowPlayingMovies: getNowPlayingMoviesData,
	topRatedMovies: getTopRatedMoviesData,
	upcomingMovies: getUpcomingMoviesData,
};

export const useInfiniteRequestQuery = (queryName: QueryName) =>
	useInfiniteQuery<MoviesData>({
		queryKey: [QUERY_KEYS[queryName]],
		queryFn: ({ pageParam = 1 }) => requestMap[queryName](pageParam),
		getNextPageParam: (lastPage: MoviesData) =>
			lastPage && lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
	});

export const usePopularMovies = (page: number) =>
	useQuery([QUERY_KEYS.popularMovies], () => getPopularMoviesData(page));

export const useNowPlayingMovies = (page: number) =>
	useQuery([QUERY_KEYS.nowPlayingMovies], () => getNowPlayingMoviesData(page));

export const useTopRatedMovies = (page: number) =>
	useQuery([QUERY_KEYS.topRatedMovies], () => getTopRatedMoviesData(page));

export const useUpcomingMovies = (page: number) =>
	useQuery([QUERY_KEYS.upcomingMovies], () => getUpcomingMoviesData(page));

export const useSimilarMovies = (movieId: number) =>
	useQuery([QUERY_KEYS.similarMovies], () => getSimilarMoviesData(movieId));

export const useRecommendationsMovies = (movieId: number) =>
	useQuery([QUERY_KEYS.recommendationsMovies], () => getRecommendationsMoviesData(movieId));
