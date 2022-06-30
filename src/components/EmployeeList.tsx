import { useEffect } from 'react';
import API from '../api';

type Props = {};

const EmployeeList = ({}: Props) => {
	useEffect(() => {
		API.get('/employees').then(({ data }) => {
			console.log(data);
		});
	}, []);

	return <div>EmployeeList</div>;
};

export default EmployeeList;
