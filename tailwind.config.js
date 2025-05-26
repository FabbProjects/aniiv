module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
 	extend: {
     fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
 		keyframes: {
 			sparkle1: {
 				'0%, 100%': {
 					opacity: '0.8',
 					transform: 'scale(1)'
 				},
 				'50%': {
 					opacity: '0.2',
 					transform: 'scale(1.3)'
 				}
 			},
 			sparkle2: {
 				'0%, 100%': {
 					opacity: '0.6',
 					transform: 'scale(1)'
 				},
 				'50%': {
 					opacity: '0.1',
 					transform: 'scale(1.4)'
 				}
 			},
 			sparkle3: {
 				'0%, 100%': {
 					opacity: '0.5',
 					transform: 'scale(1)'
 				},
 				'50%': {
 					opacity: '0.15',
 					transform: 'scale(1.2)'
 				}
 			},
 			sparkle4: {
 				'0%, 100%': {
 					opacity: '0.7',
 					transform: 'scale(1)'
 				},
 				'50%': {
 					opacity: '0.25',
 					transform: 'scale(1.5)'
 				}
 			}
 		},
 		animation: {
 			sparkle1: 'sparkle1 3s ease-in-out infinite',
 			sparkle2: 'sparkle2 4s ease-in-out infinite',
 			sparkle3: 'sparkle3 2.5s ease-in-out infinite',
 			sparkle4: 'sparkle4 3.5s ease-in-out infinite'
 		},
 		borderRadius: {
 			lg: 'var(--radius)',
 			md: 'calc(var(--radius) - 2px)',
 			sm: 'calc(var(--radius) - 4px)'
 		},
 		colors: {
 			background: 'hsl(var(--background))',
 			foreground: 'hsl(var(--foreground))',
 			card: {
 				DEFAULT: 'hsl(var(--card))',
 				foreground: 'hsl(var(--card-foreground))'
 			},
 			popover: {
 				DEFAULT: 'hsl(var(--popover))',
 				foreground: 'hsl(var(--popover-foreground))'
 			},
 			primary: {
 				DEFAULT: 'hsl(var(--primary))',
 				foreground: 'hsl(var(--primary-foreground))'
 			},
 			secondary: {
 				DEFAULT: 'hsl(var(--secondary))',
 				foreground: 'hsl(var(--secondary-foreground))'
 			},
 			muted: {
 				DEFAULT: 'hsl(var(--muted))',
 				foreground: 'hsl(var(--muted-foreground))'
 			},
 			accent: {
 				DEFAULT: 'hsl(var(--accent))',
 				foreground: 'hsl(var(--accent-foreground))'
 			},
 			destructive: {
 				DEFAULT: 'hsl(var(--destructive))',
 				foreground: 'hsl(var(--destructive-foreground))'
 			},
 			border: 'hsl(var(--border))',
 			input: 'hsl(var(--input))',
 			ring: 'hsl(var(--ring))',
 			chart: {
 				'1': 'hsl(var(--chart-1))',
 				'2': 'hsl(var(--chart-2))',
 				'3': 'hsl(var(--chart-3))',
 				'4': 'hsl(var(--chart-4))',
 				'5': 'hsl(var(--chart-5))'
 			}
 		}
 	}
 },
  plugins: [require("tailwindcss-animate")],
}