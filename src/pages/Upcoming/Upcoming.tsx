import React, { FC } from 'react';

import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Cards } from '../../containers';
import { useInfiniteRequestQuery, useInfiniteScroll } from '../../hooks';

const Upcoming: FC = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteRequestQuery('upcomingMovies');

	useInfiniteScroll({ fetchNextPage, hasNextPage });

	return (
		<>
			<PageTitle title='Upcoming movies' />

			{isLoading ? <Loader /> : <Cards data={data} />}
		</>
	);
};

export default Upcoming;
