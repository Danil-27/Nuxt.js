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
			fontFamily: {
				geistMono: '"geistMono", sans-serif',
				geistSemiBold: '"geistSemiBold", sans-serif',
				geistBold: '"geistBold", sans-serif',
			},
			colors: {
				main: 'var(--nain)',
				additional: 'var(--additional)',
				dark: 'var(--dark)',
				darkGrey: 'var(--dark-grey)',
				grey: 'var(--grey)',
			},
		},
	},
	plugins: [],
};
