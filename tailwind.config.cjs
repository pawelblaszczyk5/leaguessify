const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			gray: colors.coolGray
		}
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-neumorphism')]
};

module.exports = config;
