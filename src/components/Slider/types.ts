import { Settings } from 'react-slick';

import { Movie } from '../../api/movie/types';

export type SliderUIProps = {
	movies?: Movie[];
	settings?: Settings;
};
