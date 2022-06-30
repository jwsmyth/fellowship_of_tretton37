import { render, screen } from '@testing-library/react';
import EmployeeCard from './EmployeeCard';

describe('<EmployeeCard />', () => {
	test('renders component', () => {
		render(<EmployeeCard name={'jonas'} />);
		const propName = screen.getByText(/jonas/i);
		expect(propName).toBeInTheDocument();
	});
});
