/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {keyframes: {
			fadeInOut: {
			  '0%, 100%': { opacity: 0 }, // Empieza y termina invisible
			  '50%': { opacity: 1 },       // En el medio es visible
			},
		  },
		  animation: {
			fadeInOut: 'fadeInOut 4s ease-in-out infinite', // Duración 4s, animación infinita
		  },},
	},
	plugins: [],
}
