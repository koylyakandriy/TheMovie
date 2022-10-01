import client from '../base';
// import { MinsMaxsDataResponse } from '../minsMaxs/types';
// import { RequestOptions } from '../types';

export const getBrandMatrixData = async ({ location, brand, department, size, color }: RequestOptions) => {
	try {
		const { data } = await client.get<MinsMaxsDataResponse[]>(/brand_matrix/${location}/${brand}/${department}/${color}/${size});
		
		return data;
	} catch (error) {
		console.error(error);
		
		return null;
	}
};
