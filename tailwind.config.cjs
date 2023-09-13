/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"blue-dark": '#051231',
				"blue": '#3d30bf',
				"blue-light": '#5e48ff',
				"light": "#ffffff",
				"green-accent": "#00e8c3"
			}
		},
	},
	plugins: [],
}
