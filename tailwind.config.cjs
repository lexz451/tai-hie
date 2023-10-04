const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"blue-dark": '#051231',
				'blue-dark-translucent': 'rgba(5, 18, 49, 0.7)',
				"blue": '#3d30bf',
				"blue-light": '#5e48ff',
				"light": "#ffffff",
				"grey": "#6b7280",
				"green-accent": "#00e8c3",
			}
		},
	},
	plugins: [],
}
