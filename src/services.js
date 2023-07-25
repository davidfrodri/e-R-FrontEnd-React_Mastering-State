import clientAxios from './config/axios';


export const getDataFromAPI = async () => {
	const response = await clientAxios.get('/');
	return response.data.result;
};