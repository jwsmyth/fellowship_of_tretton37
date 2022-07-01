import { render, screen } from '@testing-library/react';
import Tools from './Tools';

describe('<Tools />', () => {
	test('renders component', () => {
		render(<Tools />);
		const textElement = screen.getByText(/Tools/i);
		expect(textElement).toBeInTheDocument();
	});
});
