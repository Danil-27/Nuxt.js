/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{vue,js}', // все Vue и JS файлы в папке pages
		'./components/**/*.{vue,js}', // все Vue и JS файлы в папке components
		'./layouts/**/*.{vue,js}', // все Vue и JS файлы в папке layouts
		'./plugins/**/*.{js}', // все JS файлы в папке plugins
		'./nuxt.config.{js,ts}', // ваш конфигурационный файл Nuxt
		'./app.{vue,js}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial': 'radial-gradient(circle, rgba(255, 122, 51, 0.25), rgba(255, 89, 0, 0), transparent 70%)',
			},
			fontFamily: {
				geistMono: '"geistMono", sans-serif',
				geistSemiBold: '"geistSemiBold", sans-serif',
				geistBold: '"geistBold", sans-serif',
				geistRegular: '"geistRegular", sans-serif',
				geistMedium: '"geistMedium", sans-serif',
			},
			fontSize: {
				xxxs: ['5px', { lineHeight: '6px' }],
				xxs: ['8px', { lineHeight: '10px' }],
				xs: ['10px', { lineHeight: '14px' }],
				sm: ['12px', { lineHeight: '16px' }],
				md: ['14px', { lineHeight: '18px' }],
				lg: ['16px', { lineHeight: '24px' }],
				H1: ['32px', { lineHeight: '40px' }],
				H2: ['24px', { lineHeight: '32px' }],
				H3: ['19px', { lineHeight: '23px' }],
			},
			colors: {
				main: 'var(--nain)',
				green: 'var(--green)',
				lightGreen: 'var(--light-green)',
				additional: 'var(--additional)',
				dark: 'var(--dark)',
				dark50: 'var(--dark-50)',
				darkGrey: 'var(--dark-grey)',
				red: 'var(--red)',
			},
		},
	},
	plugins: [],
};
