import { getRequest } from '../base';
// import { Core } from '../core';

// class Movie extends Core {
// 	getMovie: any = async () => this.get('/movie/76341')
// }
//
// export const movie = new Movie();

type DataProps = {
	data: string;
};

const movie = {
	getMovie: async (): Promise<DataProps> => getRequest('/movie/76341'),
};

export const getMovieData = async () => {
	try {
		const { data } = await movie.getMovie();

		return data;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);

		return null;
	}
};
