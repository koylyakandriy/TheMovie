import { Path } from '../../enum/routes';

export const navLinks: { path: Path; name: string }[] = [
	{
		path: Path.moviePopular,
		name: 'Popular',
	},
	{
		path: 'movies/now-playing',
		name: 'Now playing',
	},
	{
		path: 'movies/top-rated',
		name: 'Top Rated',
	},
	{
		path: 'movies/upcoming',
		name: 'Upcoming',
	},
];
