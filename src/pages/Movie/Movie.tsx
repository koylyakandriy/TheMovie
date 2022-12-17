import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import MUIComponents from '../../components/materialUIComponents';
import Slider from '../../components/Slider/Slider';
import { getImagePath } from '../../helpers/getImagePath';
import { useMovie } from '../../hooks';
import { useMovieCredits } from '../../hooks/credits';
import { useRecommendationsMovies, useSimilarMovies } from '../../hooks/movies';

const Movie: FC = () => {
	const { id } = useParams();
	const [showMore, setShowMore] = useState(false);

	const { data, isLoading } = useMovie(Number(id));
	const { data: similarMoviesData } = useSimilarMovies(Number(id));
	const { data: recommendationsMoviesData } = useRecommendationsMovies(Number(id));
	const { data: moviesCreditsData } = useMovieCredits(Number(id));

	return isLoading ? (
		<Loader />
	) : (
		<>
			<MUIComponents.Grid spacing={4} container>
				<MUIComponents.Grid sm={5} item>
					<MUIComponents.CardMedia
						alt={`Poster - ${data?.title}`}
						component='img'
						image={getImagePath(data?.poster_path)}
					/>
				</MUIComponents.Grid>
				<MUIComponents.Grid sm={7} item>
					<MUIComponents.Typography variant='h3'>{data?.title}</MUIComponents.Typography>
					<MUIComponents.Typography marginY={10} sx={{ marginY: '1rem' }} variant='h6'>
						Release date: {data?.release_date}
					</MUIComponents.Typography>
					<MUIComponents.Collapse collapsedSize={480} in={showMore}>
						<MUIComponents.Typography sx={{ fontSize: '2rem' }}>
							{data?.overview}
						</MUIComponents.Typography>
					</MUIComponents.Collapse>
					{data?.overview && data.overview.length > 416 && (
						<MUIComponents.Button
							variant='text'
							fullWidth
							onClick={() => setShowMore((prev) => !prev)}
						>
							{showMore ? 'Show less' : 'Show more'}
						</MUIComponents.Button>
					)}
				</MUIComponents.Grid>

				<MUIComponents.Grid sm={12} item>
					<MUIComponents.Typography mb={4} mt={2} variant='h5'>
						Acting&apos;s
						<MUIComponents.AvatarGroup
							max={12}
							sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
							total={moviesCreditsData?.cast.length}
						>
							{moviesCreditsData?.cast.map((acting) => (
								<MUIComponents.Avatar
									alt={acting.name}
									key={acting.id}
									src={getImagePath(acting.profile_path, 300)}
									sx={{ width: 100, height: 100 }}
								/>
							))}
						</MUIComponents.AvatarGroup>
					</MUIComponents.Typography>
				</MUIComponents.Grid>
			</MUIComponents.Grid>

			<MUIComponents.Box>
				<MUIComponents.Typography variant='h5'>Similar Movies</MUIComponents.Typography>
				<Slider movies={similarMoviesData?.results} />

				<MUIComponents.Typography variant='h5'>Recommendation Movies</MUIComponents.Typography>
				<Slider movies={recommendationsMoviesData?.results} settings={{ rtl: true }} />
			</MUIComponents.Box>
		</>
	);
};

export default Movie;
