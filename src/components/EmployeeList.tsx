import EmployeeCard from './EmployeeCard';
import { Employee } from '../types';
import { useFetchData } from '../hooks/useFetchData';

const EmployeeList = () => {
	const { response: employees, error } = useFetchData<Employee>('/employees');

	return (
		<div className="">
			<h1>EmployeeList</h1>
			{employees
				? employees.map(emp => <EmployeeCard key={emp.email} name={emp.name} />)
				: null}
		</div>
	);
};

export default EmployeeList;
