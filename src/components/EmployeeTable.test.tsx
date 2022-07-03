import { render, screen } from '@testing-library/react';
import { Employee } from '../types';
import EmployeeTable from './EmployeeTable';
import mockFile from '../mock/test-mock.json';

describe('<EmployeTable />', () => {
	const employee: Employee = mockFile[0];
	test('renders component', () => {
		render(<EmployeeTable {...employee} />);
		const name = screen.getByText(/first guy/i);
		expect(name).toBeInTheDocument();
	});
});
