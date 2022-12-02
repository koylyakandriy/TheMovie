import React, { FC } from 'react';

import Grid from '@mui/material/Grid';

import CardUI from '../../components/Card/Card';

import { CardsProps } from './types';

const Cards: FC<CardsProps> = ({ pages }) =>
	pages ? (
		<Grid spacing={2} container>
			{pages.map((page, i) => (
				<React.Fragment key={i}>
					{page.results.map(({ id, title, poster_path, release_date, overview, vote_average }) => (
						<Grid key={id} lg={3} md={4} xs={12} item>
							<CardUI
								id={id}
								overview={overview}
								posterPath={poster_path}
								releaseDate={release_date}
								title={title}
								vote_average={vote_average}
							/>
						</Grid>
					))}
				</React.Fragment>
			))}
		</Grid>
	) : null;

export default Cards;
