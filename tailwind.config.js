/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "hsl(14, 86%, 95%)",
					200: "hsl(14, 86%, 90%)",
					400: "hsl(14, 86%, 49%)",
					500: "hsl(7, 68%, 47%)",
				},
			},
		},
	},
	plugins: [],
};
