import { Employee } from '../types';
import placeholder from '../assets/portait-placeholder.png';
import Socials from './Socials';

const EmployeeCard = (employee: Employee) => {
	return (
		<div className="rounded overflow-hidden shadow-lg w-full">
			<img
				className="min-w-full p-4 h-80 object-cover"
				src={employee.imagePortraitUrl ?? placeholder}
				alt={
					employee.imagePortraitUrl
						? `Portait of ${employee.name}`
						: 'Portrait placeholder'
				}
			/>
			<div className="px-4 pb-6 grid grid-cols-3">
				<div className="col-span-2">
					<p className="font-bold mb-1">{employee.name}</p>
					<p className="text-sm">Office: {employee.office}</p>
				</div>
				<div className="justify-self-end">
					<Socials
						twitter={employee.twitter}
						github={employee.gitHub}
						linkedin={employee.linkedIn}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeeCard;
