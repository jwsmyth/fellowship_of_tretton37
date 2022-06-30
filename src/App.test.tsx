import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	test('renders component', () => {
		render(<App />);
		const textElement = screen.getByText(/Hello World!/i);
		expect(textElement).toBeInTheDocument();
	});
});
