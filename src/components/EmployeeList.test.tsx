import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';

describe('<EmployeeList />', () => {
	test('renders component', async () => {
		render(<EmployeeList />);
		expect(await screen.findByRole('grid')).toBeInTheDocument();
	});
});
