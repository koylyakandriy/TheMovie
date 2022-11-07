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

type SelectProps = {
	pages: MoviesData[];
};

export const useInfiniteRequestQuery = (queryName: QueryName) =>
	useInfiniteQuery(
		[QUERY_KEYS[queryName]],
		({ pageParam = 1 }) => requestMap[queryName](pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				const maxPages = lastPage?.total_pages;
				const nextPage = allPages.length + 1;

				return nextPage <= maxPages ? nextPage : undefined;
			},
			// TODO: do I need to use useCallback here ?
			select: ({ pages }: SelectProps) => pages.flatMap((page) => page.results),
		},
	);

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
