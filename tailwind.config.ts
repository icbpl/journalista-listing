import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			// ... keep existing code (container configuration)
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				journal: {
					background: '#FAFAFA',
					text: '#121212', // Improved contrast
					muted: '#595959', // Improved contrast
					accent: '#6E59A5', // Improved contrast
					border: '#E5E5E5',
				},
				// ... keep existing code (other color definitions)
			},
			// ... keep existing code (other theme extensions)
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;