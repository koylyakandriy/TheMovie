import React, { FC } from 'react';

import Card from '../../components/Card/Card';
import MUIComponents from '../../components/materialUIComponents';

import { CardsProps } from './types';

const Cards: FC<CardsProps> = ({ pages }) =>
	pages ? (
		<MUIComponents.Grid spacing={2} container>
			{pages.map((page, i) => (
				<React.Fragment key={i}>
					{page.results.map(({ id, title, poster_path, release_date, overview, vote_average }) => (
						<MUIComponents.Grid key={id} lg={3} md={4} xs={12} item>
							<Card
								id={id}
								overview={overview}
								posterPath={poster_path}
								releaseDate={release_date}
								title={title}
								vote_average={vote_average}
							/>
						</MUIComponents.Grid>
					))}
				</React.Fragment>
			))}
		</MUIComponents.Grid>
	) : null;

export default Cards;
