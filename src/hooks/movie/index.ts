import { useQuery } from '@tanstack/react-query';

import { getMovieData, QUERY_KEYS } from '../../api';

export const useMovie = (id: number) => useQuery([QUERY_KEYS.movie, id], () => getMovieData(id));
