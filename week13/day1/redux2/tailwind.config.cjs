/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			dropShadow: {
				card: "15px 15px 15px black",
			},
		},
	},
	plugins: [],
};
