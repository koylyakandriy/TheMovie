import client from '../base';

export const getMovieData = async (id: number) => {
	try {
		const { data }: any = await client.get(`/movie/${id}`);

		return data;
	} catch (error) {
		console.error(error);

		return null;
	}
};
