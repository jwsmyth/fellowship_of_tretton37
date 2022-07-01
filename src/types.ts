export type Employee = {
	name: string;
	email: string;
	phoneNumber: string;
	office: string;
	manager: string;
	orgUnit: string;
	mainText: string;
	gitHub: string | null;
	twitter: string | null;
	stackOverflow: string | null;
	linkedIn: string | null;
	imagePortraitUrl: string | null;
	imageWallOfLeetUrl: string | null;
	highlighted: boolean;
	published: boolean;
};

export const TWITTER_BASE_URL = 'https://twitter.com';
export const LINKEDIN_BASE_URL = 'https://linkedin.com';
export const GITHUB_BASE_URL = 'https://github.com';
