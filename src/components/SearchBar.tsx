import { Dispatch, SetStateAction } from 'react';

type Props = {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ search, setSearch }: Props) => {
	return (
		<input
			type="text"
			value={search}
			placeholder="Search..."
			onChange={e => setSearch(e.target.value)}
		/>
	);
};

export default SearchBar;
