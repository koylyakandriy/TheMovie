import React, { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SlickSlider, { Settings } from 'react-slick';

import { getImagePath } from '../../helpers/getImagePath';
import MUIComponents from '../materialUIComponents';
import UnknownText from '../UnknownText/UnknownText';

import { SliderUIProps } from './types';

const initialSettings: Settings = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 7000,
	cssEase: 'ease-out',
	swipeToSlide: true,
};

const Slider: FC<SliderUIProps> = ({ movies, settings }) => {
	const navigate = useNavigate();

	const sliderSettings = useMemo(
		() => ({
			...initialSettings,
			...settings,
		}),
		[settings],
	);

	return movies?.length ? (
		<SlickSlider {...sliderSettings}>
			{movies?.map(({ id, title, poster_path, release_date }) => (
				<MUIComponents.Grid key={id}>
					<MUIComponents.Card sx={{ width: 150 }}>
						<MUIComponents.CardActionArea onClick={() => navigate(`/movie/${id}`)}>
							<MUIComponents.CardMedia
								alt={`Poster - ${title}`}
								component='img'
								height={202}
								image={getImagePath(poster_path)}
							/>
							<MUIComponents.CardContent>
								<MUIComponents.Typography color='text.secondary' textAlign='center' variant='body2'>
									<UnknownText text={release_date} />
								</MUIComponents.Typography>
							</MUIComponents.CardContent>
						</MUIComponents.CardActionArea>
					</MUIComponents.Card>
				</MUIComponents.Grid>
			))}
		</SlickSlider>
	) : (
		<MUIComponents.Typography align='center' variant='subtitle1'>
			Movies not found
		</MUIComponents.Typography>
	);
};

export default Slider;
