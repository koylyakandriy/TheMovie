import { Path } from '../../enum/routes';

export const navLinks: { path: Path; name: string }[] = [
	{
		path: Path.moviePopular,
		name: 'Popular',
	},
	{
		path: Path.movieNowPlaying,
		name: 'Now playing',
	},
	{
		path: Path.movieTopRated,
		name: 'Top Rated',
	},
	{
		path: Path.movieUpcoming,
		name: 'Upcoming',
	},
];
