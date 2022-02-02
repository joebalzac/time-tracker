const em = (px) => `${px / 16}em`;
const rem = (px) => `${px / 16}rem`;
const px = (num) => `${num}px`;

module.exports = {
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		fontFamily: {
			body: ['Rubik', 'sans-serif'],
		},
		fontSize: {
			// The font-scaling system uses Modular Scale
			// Base is 16px with 1.125x scaling
			// Reference: https://www.modularscale.com/?16&px&1.125
			'-ms-3': rem(10),
			'-ms-2': rem(12),
			'-ms-1': rem(14),
			'ms-0': rem(16),
			'ms-1': rem(18),
			'ms-2': rem(20),
			'ms-3': rem(22),
			'ms-4': rem(25),
			'ms-5': rem(28),
			'ms-6': rem(32),
			'ms-7': rem(36),
			'ms-8': rem(41),
			'ms-9': rem(46),
			'ms-10': rem(52),
			'ms-11': rem(58),
			'ms-12': rem(65),
		},
		colors: {
			// Primary, secondary, tertiary should have the main brand colors, then up-shade and down-shade
			primary: {
				verylight: '#56c2e6',
				light: '#bdc1ff',
				DEFAULT: '#5847eb',
				dark: '#1c1f4a',
				fg: '#fff',
			},
			secondary: {
				light: '#ff8c66',
				DEFAULT: '#ff5c7c',
				dark: '#7536d3',
				fg: '#fff',
			},
			tertiary: {
				light: '#4acf81',
				DEFAULT: '#f1c65b',
				dark: '#710627',
				fg: '#fff',
			},
			grey: {
				50: '#f5f5f5',
				100: '#e9eaeb',
				300: '#bec1c2',
				500: '#666d70',
				700: '#3b4447',
				900: '#252f33',
			},
			black: {
				transparent: 'rgba(0,0,0,0.7)',
				DEFAULT: '#1a1818',
			},
			white: {
				transparent: 'rgba(255,255,255,0.7)',
				DEFAULT: '#fefefe',
			},
		},
		containers: {
			sm: rem(640),
			md: rem(768),
			lg: rem(1024),
			xl: rem(1280),
			'2xl': rem(1780),
			DEFAULT: rem(1320),
			padding: '1.5rem',
		},
		extend: {
			spacing: {
				xs: '0.25rem',
				s: '0.5rem',
				m: '1rem',
				l: '2rem',
				xl: '4rem',
			},
			borderWidth: {
				12: '12px',
			},
			// Controls rich-text styling (tailwind typography plugin)
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '100%',
						lineHeight: 1.5,
						a: {
							color: theme('colors.primary'),
						},
					},
				},
				sm: {
					css: {
						fontSize: rem(14),
						lineHeight: 1.5,
					},
				},
				lg: {
					css: {
						fontSize: rem(18),
						lineHeight: 1.5,
					},
				},
				xl: {
					css: {
						fontSize: rem(20),
						lineHeight: 1.5,
					},
				},
				'2xl': {
					css: {
						fontSize: rem(22),
						lineHeight: 1.5,
					},
				},
			}),
		},
	},
	corePlugins: {
		container: false,
	},
};
