type SearchBarProps = {
	children: JSX.Element[];
};

const Tools = ({ children }: SearchBarProps) => {
	return (
		<div data-testid="tools-container" className="p-4 my-4 bg-gray-200 rounded">
			{children}
		</div>
	);
};

export default Tools;
