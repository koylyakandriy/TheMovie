import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { MoviesData } from '../../api/movies/types';
import Loader from '../../components/Loader/Loader';
import MUIComponents from '../../components/materialUIComponents';
import { Path } from '../../enum/routes';
import { getImagePath } from '../../helpers/getImagePath';
import { getRandomInt } from '../../helpers/getRandomInt';
import { useInfiniteRequestQuery } from '../../hooks';

const getMovies = (pages?: MoviesData[]) => pages?.[0].results;
const getRandomMovie = (pages?: MoviesData[]) => getRandomInt(getMovies(pages)?.length ?? 0);

const Home = () => {
	const { data: popularMoviesData, isLoading: isPopularMoviesLoading } =
		useInfiniteRequestQuery('popularMovies');
	const { data: nowPlayingMoviesData, isLoading: isNowPlayingLoading } =
		useInfiniteRequestQuery('nowPlayingMovies');
	const { data: topRatedMoviesData, isLoading: isTopRatedMoviesLoading } =
		useInfiniteRequestQuery('topRatedMovies');
	const { data: upcomingMoviesData, isLoading: isUpcomingMoviesLoading } =
		useInfiniteRequestQuery('upcomingMovies');

	const isLoading =
		isPopularMoviesLoading ||
		isNowPlayingLoading ||
		isTopRatedMoviesLoading ||
		isUpcomingMoviesLoading;

	const movies = [
		{
			link: Path.moviePopular,
			...getMovies(popularMoviesData?.pages)?.[getRandomMovie(popularMoviesData?.pages)],
		},
		{
			link: Path.movieNowPlaying,
			...getMovies(nowPlayingMoviesData?.pages)?.[getRandomMovie(nowPlayingMoviesData?.pages)],
		},
		{
			link: Path.movieTopRated,
			...getMovies(topRatedMoviesData?.pages)?.[getRandomMovie(topRatedMoviesData?.pages)],
		},
		{
			link: Path.movieUpcoming,
			...getMovies(upcomingMoviesData?.pages)?.[getRandomMovie(upcomingMoviesData?.pages)],
		},
	];

	return isLoading ? (
		<Loader />
	) : (
		<MUIComponents.Grid alignItems='center' spacing={2} container>
			{movies.map(({ id, title, poster_path, link }) => (
				<MUIComponents.Grid key={id} lg={6} md={6} xs={12} item>
					<MUIComponents.Card
						sx={{
							'&:hover': {
								opacity: 0.9,
							},
						}}
					>
						<MUIComponents.CardActionArea component={RouterLink} to={link}>
							<MUIComponents.CardMedia
								alt={`Poster - ${title}`}
								component='img'
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
