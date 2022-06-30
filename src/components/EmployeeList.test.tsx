import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';

describe('<EmployeeList />', () => {
	test('renders component', () => {
		render(<EmployeeList />);
		const textElement = screen.getByText(/EmployeeList/i);
		expect(textElement).toBeInTheDocument();
	});
});
