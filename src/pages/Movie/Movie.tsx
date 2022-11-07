import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Loader from '../../components/Loader/Loader';
import SliderUI from '../../components/Slider/Slider';
import { getImagePath } from '../../helpers/getImagePath';
import { useMovie } from '../../hooks';
import { useRecommendationsMovies, useSimilarMovies } from '../../hooks/movies';

const Movie: FC = () => {
	const { id } = useParams();

	const { data, isLoading } = useMovie(Number(id));
	const { data: similarMoviesData } = useSimilarMovies(Number(id));
	const { data: recommendationsMoviesData } = useRecommendationsMovies(Number(id));

	return isLoading ? (
		<Loader />
	) : (
		<>
			<Grid spacing={4} container>
				<Grid sm={5} item>
					<CardMedia
						alt={`Poster - ${data?.title}`}
						component='img'
						image={getImagePath(data?.poster_path)}
					/>
				</Grid>
				<Grid sm={7} item>
					<Typography variant='h2'>{data?.title}</Typography>
					<Typography variant='h5'>{data?.overview}</Typography>
					<Typography variant='subtitle1'>Release date: {data?.release_date}</Typography>
				</Grid>
			</Grid>

			<SliderUI movies={similarMoviesData?.results} />
			<SliderUI movies={recommendationsMoviesData?.results} settings={{ rtl: true }} />
		</>
	);
};

export default Movie;
