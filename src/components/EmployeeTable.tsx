import { Employee } from '../types';
import { LINKEDIN_BASE_URL, TWITTER_BASE_URL, GITHUB_BASE_URL } from '../types';

const EmployeeTable = (employee: Employee) => {
	return (
		<tr>
			<td className="border px-8 py-4">{employee.name}</td>
			<td className="border px-8 py-4">{employee.office}</td>
			<td className="border px-8 py-4">
				<a
					className="link"
					href={`${GITHUB_BASE_URL}/${employee.gitHub}`}
					target="_blank"
					rel="noreferrer"
				>
					{employee.gitHub}
				</a>
			</td>
			<td className="border px-8 py-4">
				<a
					className="link"
					href={`${TWITTER_BASE_URL}/${employee.twitter}`}
					target="_blank"
					rel="noreferrer"
				>
					{employee.twitter}
				</a>
			</td>
			<td className="border px-8 py-4">
				<a
					className="link"
					href={`${LINKEDIN_BASE_URL}${employee.linkedIn}`}
					target="_blank"
					rel="noreferrer"
				>
					{employee.linkedIn}
				</a>
			</td>
		</tr>
	);
};

export default EmployeeTable;
