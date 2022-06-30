import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockFile from '../mock/test-mock.json';

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE });

export const mock = new MockAdapter(API, { delayResponse: 0 });

if (process.env.REACT_APP_MOCK_API === 'true') {
	mock.onGet('/employees').reply(200, {
		mockFile,
	});
} else {
	mock.restore();
}

export default API;
