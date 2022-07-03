import { Employee } from '../types';

type DisplayProps = {
	employees: () => Employee[];
	components: React.ElementType[];
};

const DisplayWrapper = ({
	employees,
	components: [ContainerComponent, ItemComponent],
}: DisplayProps) => {
	return (
		<ContainerComponent>
			{employees().map(employee => (
				<ItemComponent key={employee.email} {...employee} />
			))}
		</ContainerComponent>
	);
};

export default DisplayWrapper;
