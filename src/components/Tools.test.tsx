import { render, screen } from '@testing-library/react';
import Tools from './Tools';

describe('<Tools />', () => {
	test('renders component', async () => {
		render(<Tools children={[]} />);
		const testId = await screen.findByTestId('tools-container');
		expect(testId).toBeInTheDocument();
	});
});
