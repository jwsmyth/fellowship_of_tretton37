type SearchBarProps = {
	children: JSX.Element[];
};

const Tools = ({ children }: SearchBarProps) => {
	return (
		<div
			data-testid="tools-container"
			className="grid sm:grid-cols-2 gap-2 p-4 my-4 bg-gray-200 rounded"
		>
			{children}
		</div>
	);
};

export default Tools;
