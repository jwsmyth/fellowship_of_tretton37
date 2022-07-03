import { useState } from 'react';

type ButtonProps = {
	toggleView: () => void;
	resetFilters: () => void;
};
const Buttons = ({ toggleView, resetFilters }: ButtonProps) => {
	const resetFiltersText = 'Reset filters';
	const [buttonText, setButtonText] = useState('View in table');

	const toggle = () => {
		if (buttonText === 'View in table') setButtonText('View in grid');
		else setButtonText('View in table');
		toggleView();
	};

	return (
		<>
			<button
				onClick={toggle}
				className="bg-tretton-blue hover:bg-tretton-green text-white font-bold py-2 px-4 rounded"
			>
				{buttonText}
			</button>
			<button
				onClick={resetFilters}
				className="bg-tretton-blue hover:bg-tretton-green text-white font-bold py-2 px-4 rounded"
			>
				{resetFiltersText}
			</button>
		</>
	);
};

export default Buttons;
