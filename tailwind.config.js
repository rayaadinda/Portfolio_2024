/** @type {import('tailwindcss').Config} */
module.exports = {
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
			animation: {
				"float-slow": "float 6s ease-in-out infinite",
				"float-medium": "float 4s ease-in-out infinite",
				"float-fast": "float 3s ease-in-out infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
		},
	},
	plugins: [],
}
