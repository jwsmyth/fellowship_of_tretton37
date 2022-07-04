import { Employee } from '../types';

export const filterData = (
	employee: Employee,
	searchTerm: string,
	filter: string
) => {
	if (filter === 'name') {
		return searchTerm
			? employee.name?.toLowerCase().includes(searchTerm.toLowerCase())
			: employee;
	}

	if (filter === 'office') {
		return searchTerm
			? employee.office?.toLowerCase().includes(searchTerm.toLowerCase())
			: employee;
	}

	return employee;
};
