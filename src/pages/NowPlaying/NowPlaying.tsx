import React, { FC } from 'react';

import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Cards } from '../../containers';
import { useInfiniteRequestQuery, useInfiniteScroll } from '../../hooks';

const NowPlaying: FC = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } =
		useInfiniteRequestQuery('nowPlayingMovies');

	useInfiniteScroll({ fetchNextPage, hasNextPage });

	return (
		<>
			<PageTitle title='Now playing movies' />

			{isLoading ? <Loader /> : <Cards pages={data?.pages} />}
		</>
	);
};

export default NowPlaying;
