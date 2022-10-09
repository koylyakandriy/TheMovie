import { useQuery } from '@tanstack/react-query';

import {
	getLatestMoviesData,
	getPopularMoviesData,
	getTopRatedMoviesData,
	getUpcomingMoviesData,
	QUERY_KEYS,
} from '../../api';

export const useLatestMovies = () =>
	useQuery([QUERY_KEYS.latestMovies], () => getLatestMoviesData());

export const usePopularMovies = () =>
	useQuery([QUERY_KEYS.popularMovies], () => getPopularMoviesData());

export const useTopRatedMovies = () =>
	useQuery([QUERY_KEYS.topRatedMovies], () => getTopRatedMoviesData());

export const useUpcomingMovies = () =>
	useQuery([QUERY_KEYS.upcomingMovies], () => getUpcomingMoviesData());
