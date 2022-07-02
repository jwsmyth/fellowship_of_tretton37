import EmployeeCard from './EmployeeCard';
import { Employee } from '../types';
import { useFetchData } from '../hooks/useFetchData';
import { useState } from 'react';
import Tools from './Tools';
import SearchBar from './SearchBar';
import { filterData } from '../utils/FilterData';

const EmployeeList = () => {
	const { response: employees, error } = useFetchData<Employee>('/employees');
	const [searchName, setSearchName] = useState('');
	const [searchOffice, setSearchOffice] = useState('');

	if (error)
		return <h2 className="text-center text-red-500 italic text-xl">{error}</h2>;
	return (
		<>
			<Tools>
				<SearchBar label="Name" search={searchName} setSearch={setSearchName} />
				<SearchBar
					label="Office"
					search={searchOffice}
					setSearch={setSearchOffice}
				/>
			</Tools>
			<div
				role="grid"
				className="grid gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{employees
					? employees
							.filter(emp => {
								return filterData(emp, searchName, 'name');
							})
							.filter(emp => {
								return filterData(emp, searchOffice, 'office');
							})
							.map(emp => <EmployeeCard key={emp.email} {...emp} />)
					: null}
			</div>
		</>
	);
};

export default EmployeeList;
