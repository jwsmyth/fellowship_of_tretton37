import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockFile from '../mock/test-mock.json';

const API_LIVE = axios.create({ baseURL: process.env.REACT_APP_API_BASE });
API_LIVE.defaults.headers.common['Authorization'] =
	process.env.REACT_APP_API_KEY!;

// MOCK INSTANCE
const API_MOCK = axios.create();
const axiosMockAdapter = new MockAdapter(API_MOCK, { delayResponse: 0 });
axiosMockAdapter.onGet('/employees').reply(200, mockFile);

export default API_LIVE;
