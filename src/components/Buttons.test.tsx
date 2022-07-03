import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from './Buttons';

describe('<Buttons />', () => {
	test('renders buttons', () => {
		render(
			<Buttons
				toggleView={function (): void {}}
				resetFilters={function (): void {}}
			/>
		);
		const toggleText = screen.getByText(/view in table/i);
		const resetText = screen.getByText(/reset filters/i);
		expect(toggleText).toBeInTheDocument();
		expect(resetText).toBeInTheDocument();
	});

	test('reset filters function called', () => {
		const click = jest.fn();
		render(<Buttons toggleView={function (): void {}} resetFilters={click} />);
		fireEvent.click(screen.getByText(/reset filters/i));
		expect(click).toHaveBeenCalled();
	});

	test('toggle view function called', () => {
		const click = jest.fn();
		render(<Buttons toggleView={click} resetFilters={function (): void {}} />);
		fireEvent.click(screen.getByText(/view in table/i));
		expect(click).toHaveBeenCalled();
	});
});
