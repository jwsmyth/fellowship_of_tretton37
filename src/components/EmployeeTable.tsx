import { Employee } from '../types';

const EmployeeTable = (employee: Employee) => {
	return (
		<tr>
			<td className="border px-8 py-4">{employee.name}</td>
			<td className="border px-8 py-4">{employee.office}</td>
			<td className="border px-8 py-4">{employee.gitHub}</td>
			<td className="border px-8 py-4">{employee.twitter}</td>
			<td className="border px-8 py-4">{employee.linkedIn}</td>
		</tr>
	);
};

export default EmployeeTable;
