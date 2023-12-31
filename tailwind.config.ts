import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				banner1: 'url(../public/img/banner1.png)',
				banner2: 'url(../public/img/banner2.png)',
			},
			colors: {
				primary: '#07c160',
				dark: '#1c1d1d',
				lightGray: '#f6f6f6',
				midGray: '#C9DAD0',
				darkGray: '#808080',
			},
			keyframes: {
				review: {
					'0%': { width: '0rem', opacity: '0' },
					'10%': { width: '0rem', opacity: '1' },
					'100%': { width: '28rem', opacity: '1' },
				},
			},
			animation: {
				review: 'review linear 1.5s',
			},
		},
	},
	plugins: [],
}
export default config
