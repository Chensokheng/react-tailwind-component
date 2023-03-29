/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
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
