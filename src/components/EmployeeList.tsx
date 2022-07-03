import EmployeeCard from './EmployeeCard';
import { Employee } from '../types';
import { useFetchData } from '../hooks/useFetchData';
import { useState } from 'react';
import Tools from './Tools';
import SearchBar from './SearchBar';
import { filterData } from '../utils/FilterData';
import EmployeeTable from './EmployeeTable';
import DisplayWrapper from './DisplayWrapper';
import { GridContainer, TableContainer } from './Containers';
import Buttons from './Buttons';

const EmployeeList = () => {
	const { response: employees, error } = useFetchData<Employee>('/employees');
	const [searchName, setSearchName] = useState('');
	const [searchOffice, setSearchOffice] = useState('');
	const [displayGrid, setDisplayGrid] = useState(true);

	const filteredEmployees = (): Employee[] => {
		return employees
			.filter(emp => filterData(emp, searchName, 'name'))
			.filter(emp => filterData(emp, searchOffice, 'office'));
	};

	const updateNameSearch = (value: string) => {
		setSearchName(value);
	};

	const updateOfficeSearch = (value: string) => {
		setSearchOffice(value);
	};

	const toggleView = () => {
		setDisplayGrid(prev => !prev);
	};

	const toggleEmployeeComponent = () => {
		return displayGrid
			? [GridContainer, EmployeeCard]
			: [TableContainer, EmployeeTable];
	};

	const resetFilters = () => {
		setSearchName('');
		setSearchOffice('');
	};

	if (error)
		return <h2 className="text-center text-red-500 italic text-xl">{error}</h2>;
	return (
		<>
			<Tools>
				<SearchBar
					label="Name"
					search={searchName}
					updateSetSearch={updateNameSearch}
				/>
				<SearchBar
					label="Office"
					search={searchOffice}
					updateSetSearch={updateOfficeSearch}
				/>
				<Buttons toggleView={toggleView} resetFilters={resetFilters} />
			</Tools>

			<DisplayWrapper
				employees={filteredEmployees}
				components={toggleEmployeeComponent()}
			/>
		</>
	);
};

export default EmployeeList;
