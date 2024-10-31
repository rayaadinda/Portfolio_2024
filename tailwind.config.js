/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				Base: "#F1F1F0",
				blue: "#3D99ED",
				orange: "#F47F2B",
				yellow: "#FFDB21",
				grey: "#787878",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
}
