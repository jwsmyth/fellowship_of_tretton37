import { render, screen } from '@testing-library/react';
import EmployeeCard from './EmployeeCard';
import { Employee } from '../types';

describe('<EmployeeCard />', () => {
	const testEmployee: Employee = {
		name: 'jonas',
		email: 'jonas@jonas.com',
		phoneNumber: '+46123456789',
		office: 'Lund',
		manager: 'Petra',
		orgUnit: '/Dev',
		mainText: '',
		gitHub: null,
		twitter: null,
		stackOverflow: null,
		linkedIn: null,
		imagePortraitUrl: null,
		imageWallOfLeetUrl: null,
		highlighted: false,
		published: false,
	};

	test('renders name', () => {
		render(<EmployeeCard {...testEmployee} />);
		const name = screen.getByText(/jonas/i);
		expect(name).toBeInTheDocument();
	});

	test('renders office', () => {
		render(<EmployeeCard {...testEmployee} />);
		const office = screen.getByText(/Office: Lund/);
		expect(office).toBeInTheDocument();
	});
});
