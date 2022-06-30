type Props = {
	name: string;
};

export default function EmployeeCard({ name }: Props) {
	return <div>EmployeeCard {name}</div>;
}
