import React, { FC } from 'react';

import Loader from '../../components/Loader/Loader';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Cards } from '../../containers';
import { useInfiniteRequestQuery, useInfiniteScroll } from '../../hooks';

const Popular: FC = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteRequestQuery('popularMovies');

	useInfiniteScroll({ fetchNextPage, hasNextPage });

	return (
		<>
			<PageTitle title='Popular movies' />

			{isLoading ? <Loader /> : <Cards pages={data?.pages} />}
		</>
	);
};

export default Popular;
