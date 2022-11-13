import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { cropText } from '../../helpers/cropText';
import { getImagePath } from '../../helpers/getImagePath';

import { CardProps } from './types';

const CardUI = ({ id, title, posterPath, overview, vote_average }: CardProps) => (
	<Card>
		<CardActionArea component={RouterLink} to={`/movie/${id}`}>
			<CardMedia
				alt={`Poster - ${title}`}
				component='img'
				height={414}
				image={getImagePath(posterPath)}
			/>
			<CardContent>
				<Typography component='div' variant='h5' gutterBottom>
					{cropText(title, 20)}
				</Typography>
				<Rating
					max={10}
					name='read-only'
					precision={0.1}
					size='medium'
					value={vote_average}
					readOnly
				/>
				<Typography
					color='text.secondary'
					height={100}
					overflow='hidden'
					textAlign='justify'
					variant='body2'
				>
					{overview}
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default CardUI;
