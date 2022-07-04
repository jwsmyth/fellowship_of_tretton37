/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			minWidth: {
				280: '280px',
			},
			maxWidth: {
				320: '320px',
			},
			colors: {
				'tretton-blue': '#002B55',
				'tretton-green': '#80C565',
			},
		},
	},
	plugins: [],
};
