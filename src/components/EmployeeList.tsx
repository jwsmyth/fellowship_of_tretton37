import EmployeeCard from './EmployeeCard';
import { Employee } from '../types';
import { useFetchData } from '../hooks/useFetchData';

const EmployeeList = () => {
	const { response: employees, error } = useFetchData<Employee>('/employees');

	if (error)
		return <h2 className="text-center text-red-500 italic text-xl">{error}</h2>;
	return (
		<>
			<h1>EmployeeList</h1>
			<div className="grid gap-4">
				{employees
					? employees.map(emp => <EmployeeCard key={emp.email} {...emp} />)
					: null}
			</div>
		</>
	);
};

export default EmployeeList;
