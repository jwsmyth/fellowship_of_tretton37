import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';

describe('<EmployeeList />', () => {
	test('renders component', () => {
		render(<EmployeeList />);
		const textElement = screen.getByRole('grid');
		expect(textElement).toBeInTheDocument();
	});
});
