import { Employee } from '../types';
import placeholder from '../assets/portait-placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const EmployeeCard = (employee: Employee) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img
				className="w-full p-4 h-80 object-cover"
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
					<FontAwesomeIcon className="px-1" size="lg" icon={faTwitter} />
					<FontAwesomeIcon className="px-1" size="lg" icon={faGithub} />
					<FontAwesomeIcon className="px-1" size="lg" icon={faLinkedin} />
				</div>
			</div>
		</div>
	);
};

export default EmployeeCard;
