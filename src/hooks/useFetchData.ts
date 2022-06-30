import { useState, useEffect } from 'react';
import API from '../api';

export const useFetchData = <T>(url: string) => {
	const [response, setResponse] = useState<T[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await API.get(url);
				setResponse(data);
			} catch (error) {
				setError(getErrorMessage(error));
			}
		};

		fetchData();
	}, [url]);

	return { response, error };
};

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) return error.message;
	return String(error);
}
