import { Movie } from '../movie/types';

export type MoviesData = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};
