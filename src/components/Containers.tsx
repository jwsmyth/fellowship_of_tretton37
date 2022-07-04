type EmployeeProps = {
	children: JSX.Element;
};

export const GridContainer = ({ children }: EmployeeProps) => {
	return (
		<div
			role="grid"
			className="grid max-w-320 sm:max-w-none mx-auto gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{children}
		</div>
	);
};

export const TableContainer = ({ children }: EmployeeProps) => {
	return (
		<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
			<div className="inline-block shadow rounded-lg min-w-full overflow-hidden">
				<table
					role="table"
					className="shadow-lg bg-white border-collapse min-w-full overflow-x-hidden"
				>
					<thead>
						<tr>
							<th className="bg-tretton-green border text-left px-8 py-4  text-white">
								Name
							</th>
							<th className="bg-tretton-green border text-left px-8 py-4 text-white">
								Office
							</th>
							<th className="bg-tretton-green border text-left px-8 py-4 text-white">
								Github
							</th>
							<th className="bg-tretton-green border text-left px-8 py-4 text-white">
								Twitter
							</th>
							<th className="bg-tretton-green border text-left px-8 py-4 text-white">
								LinkedIn
							</th>
						</tr>
					</thead>
					<tbody>{children}</tbody>
				</table>
			</div>
		</div>
	);
};
