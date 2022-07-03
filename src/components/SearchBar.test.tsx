import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
	test('renders component', async () => {
		render(
			<SearchBar
				label="name"
				search="hello"
				updateSetSearch={() => jest.fn()}
			/>
		);
		const placeholder = await screen.findByPlaceholderText(/Search.../i);
		expect(placeholder).toBeInTheDocument();
	});

	test('expected value in search bar', () => {
		render(
			<SearchBar
				label="office"
				search="search string"
				updateSetSearch={() => jest.fn()}
			/>
		);
		const searchString = screen.getByDisplayValue(/search string/i);
		expect(searchString).toBeInTheDocument();
	});
});
