const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			gray: colors.trueGray,
			blue: colors.blue
		}
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-neumorphism')],
	purge: {
		content: ['./src/**/*.svelte'],
		safelist: [
			'my-1',
			'my-2',
			'my-3',
			'my-4',
			'my-5',
			'my-6',
			'my-7',
			'my-8',
			'my-9',
			'my-10',
			'mx-1',
			'mx-2',
			'mx-3',
			'mx-4',
			'mx-5',
			'mx-6',
			'mx-7',
			'mx-8',
			'mx-9',
			'mx-10'
		]
	}
};

module.exports = config;
