import { Dispatch, SetStateAction } from 'react';

type Props = {
	label: string;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ label, search, setSearch }: Props) => {
	return (
		<div className="grid gap-1 mb-2">
			<label htmlFor={label}>{label}</label>
			<input
				type="text"
				name={label}
				value={search}
				placeholder="Search..."
				onChange={e => setSearch(e.target.value)}
				className="form-control block px-3 py-1.5 overflow-auto text-base font-normal text-gray-700 bg-white 
					bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
					focus:bg-white focus:border-blue-600 focus:outline-none"
			/>
		</div>
	);
};

export default SearchBar;
