import { useQuery } from '@tanstack/react-query';

import { getMovieCredits, QUERY_KEYS } from '../../api';

export const useMovieCredits = (id: number) =>
	useQuery([QUERY_KEYS.movieCredits, id], () => getMovieCredits(id));
