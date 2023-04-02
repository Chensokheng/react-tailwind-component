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
			boxShadow: {
				custom: "10px 10px 0px -1px rgba(0,0,0,1)",
			},
		},
	},

	plugins: [require("@tailwindcss/aspect-ratio")],
};
