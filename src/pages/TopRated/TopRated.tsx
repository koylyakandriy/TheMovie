import React, { FC } from 'react';

import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Cards } from '../../containers';
import { useInfiniteRequestQuery, useInfiniteScroll } from '../../hooks';

const TopRated: FC = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteRequestQuery('topRatedMovies');

	useInfiniteScroll({ fetchNextPage, hasNextPage });

	return (
		<>
			<PageTitle title='Top rated movies' />

			{isLoading ? <Loader /> : <Cards data={data} />}
		</>
	);
};

export default TopRated;
