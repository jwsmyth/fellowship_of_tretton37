import { TWITTER_BASE_URL, GITHUB_BASE_URL, LINKEDIN_BASE_URL } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

type SocialProps = {
	twitter: string | null;
	github: string | null;
	linkedin: string | null;
};

const Socials = ({ twitter, github, linkedin }: SocialProps) => {
	return (
		<>
			{twitter && (
				<a
					href={`${TWITTER_BASE_URL}/${twitter}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon className="px-1" size="sm" icon={faTwitter} />
				</a>
			)}
			{github && (
				<a
					href={`${GITHUB_BASE_URL}/${github}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon className="px-1" size="sm" icon={faGithub} />
				</a>
			)}
			{linkedin && (
				<a
					href={`${LINKEDIN_BASE_URL}${linkedin}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon className="px-1" size="sm" icon={faLinkedin} />
				</a>
			)}
		</>
	);
};

export default Socials;
