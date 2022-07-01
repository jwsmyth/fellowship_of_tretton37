import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	test('renders component', () => {
		render(<App />);
		const textElement = screen.getByText(/The fellowship of the tretton37/i);
		expect(textElement).toBeInTheDocument();
	});
});
