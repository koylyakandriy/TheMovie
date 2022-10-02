import { useQuery } from 'react-query';

import { getMovieData } from '../../api/movie';
import { QUERY_KEYS } from '../../api/queryKeys';

export const useMovie = () => {
	useQuery([QUERY_KEYS.movie], async () => getMovieData());
};
