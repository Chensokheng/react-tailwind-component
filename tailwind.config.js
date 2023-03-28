/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			height: {
				100: "30rem",
			},
			width: {
				90: "22rem",
			},
		},
	},

	plugins: [require("@tailwindcss/aspect-ratio")],
};
