require('dotenv').config();
import axios from 'axios';

const APP_PORT = 3001;
const DB_URI = process.env.DB_URI;
const DB_PORT = process.env.DB_PORT;

const handleSuccess = (response) => {
	return response;
};

const handleError = (error) => {
	return error.response;
};

module.exports = {
	get: async (path) => {
		try {
			const response = await axios.get(`http://localhost:${process.env.DB_PORT}/${path}`);
			return handleSuccess(response);
		} catch (error) {
			return handleError(error);
		}
	},
	post: async (path, data = null) => {
		try {
			const response = await axios.post(`${DB_URI}:${DB_PORT}${path}`, data);
			return handleSuccess(response);
		} catch (error) {
			return handleError(error);
		}
	},
	del: async (path, data = null) => {
		try {
			const response = await axios.delete(`${DB_URI}:${DB_PORT}${path}`, data);
			return handleSuccess(response);
		} catch (error) {
			return handleError(error);
		}
	},
	handleServerSidePropsError: (error) => {
		console.log(error, 'UNHANDLED ERROR occured during Server side rendering');
		return {
			props: {},
		};
	},
};
