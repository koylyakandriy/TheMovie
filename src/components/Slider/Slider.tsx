import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { getImagePath } from '../../helpers/getImagePath';

import { SliderUIProps } from './types';

const initialSettings: Settings = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 3000,
	cssEase: 'ease-out',
	swipeToSlide: true,
};

const SliderUI: FC<SliderUIProps> = ({ movies, settings }) => {
	const navigate = useNavigate();

	const sliderSettings = {
		...initialSettings,
		...settings,
	};

	return (
		<Slider {...sliderSettings}>
			{movies?.map(({ id, title, poster_path, release_date }) => (
				<Grid key={id}>
					<Card sx={{ width: 150 }}>
						<CardActionArea onClick={() => navigate(`/movie/${id}`)}>
							<CardMedia
								alt={`Poster - ${title}`}
								component='img'
								height={202}
								image={getImagePath(poster_path)}
							/>
							<CardContent>
								<Typography color='text.secondary' textAlign='center' variant='body2'>
									{release_date}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Slider>
	);
};

export default SliderUI;
