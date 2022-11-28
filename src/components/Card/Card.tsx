import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { cropText } from '../../helpers/cropText';
import { getImagePath } from '../../helpers/getImagePath';
import MUIComponents from '../materialUIComponents';

import { CardProps } from './types';

const Card = ({ id, title, posterPath, overview, vote_average }: CardProps) => (
	<MUIComponents.Card>
		<MUIComponents.CardActionArea component={RouterLink} to={`/movie/${id}`}>
			<MUIComponents.CardMedia
				alt={`Poster - ${title}`}
				component='img'
				height={414}
				image={getImagePath(posterPath)}
			/>
			<MUIComponents.CardContent>
				<MUIComponents.Typography component='div' variant='h5' gutterBottom>
					{cropText(title, 20)}
				</MUIComponents.Typography>
				<MUIComponents.Rating
					max={10}
					name='read-only'
					precision={0.1}
					size='medium'
					value={vote_average}
					readOnly
				/>
				<MUIComponents.Typography
					color='text.secondary'
					height={100}
					overflow='hidden'
					textAlign='justify'
					variant='body2'
				>
					{overview}
				</MUIComponents.Typography>
			</MUIComponents.CardContent>
		</MUIComponents.CardActionArea>
	</MUIComponents.Card>
);

export default Card;
