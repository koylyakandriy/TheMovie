import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import MUIComponents from '../../components/materialUIComponents';
import { Path } from '../../enum/routes';
import { getImagePath } from '../../helpers/getImagePath';
import { getRandomInt } from '../../helpers/getRandomInt';
import {
	useNowPlayingMovies,
	usePopularMovies,
	useTopRatedMovies,
	useUpcomingMovies,
} from '../../hooks';

const Home = () => {
	const { data: popularMoviesData, isLoading: isPopularMoviesLoading } = usePopularMovies();
	const { data: nowPlayingMoviesData, isLoading: isNowPlayingLoading } = useNowPlayingMovies();
	const { data: topRatedMoviesData, isLoading: isNowPlayingMoviesLoading } = useTopRatedMovies();
	const { data: upcomingMoviesData, isLoading: isUpcomingMoviesLoading } = useUpcomingMovies();

	// const result = useAllMovies();

	const isLoading =
		isPopularMoviesLoading ||
		isNowPlayingLoading ||
		isNowPlayingMoviesLoading ||
		isUpcomingMoviesLoading;

	const movies = [
		{
			link: Path.moviePopular,
			...popularMoviesData?.results[getRandomInt(popularMoviesData?.results.length)],
		},
		{
			link: Path.movieNowPlaying,
			...nowPlayingMoviesData?.results[getRandomInt(nowPlayingMoviesData?.results.length)],
		},
		{
			link: Path.movieTopRated,
			...topRatedMoviesData?.results[getRandomInt(topRatedMoviesData?.results.length)],
		},
		{
			link: Path.movieUpcoming,
			...upcomingMoviesData?.results[getRandomInt(upcomingMoviesData?.results.length)],
		},
	];

	return isLoading ? (
		<Loader />
	) : (
		<MUIComponents.Grid alignItems='center' spacing={2} sx={{ marginTop: '1rem' }} container>
			{movies.map(({ id, title, poster_path, link }) => (
				<MUIComponents.Grid key={id} lg={6} md={6} xs={12} item>
					<MUIComponents.Card>
						<MUIComponents.CardActionArea component={RouterLink} to={link}>
							<MUIComponents.CardMedia
								alt={`Poster - ${title}`}
								component='img'
								height={437}
								image={getImagePath(poster_path)}
							/>
						</MUIComponents.CardActionArea>
					</MUIComponents.Card>
				</MUIComponents.Grid>
			))}
		</MUIComponents.Grid>
	);
};

export default Home;
