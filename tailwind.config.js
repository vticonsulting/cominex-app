const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const svgToDataUri = require('mini-svg-data-uri')
const { colors: appColors } = require('./app.config')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@formkit/themes/tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // require('daisyui'),
  ],
  content: [
    'content/**/*.{md,yml,json,json5,csv}',
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    // 'formkit.config.{js,ts}',
    // 'theme.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'cy-blue': '#4956e3',
        'gray': colors.stone,
        // primary: colors.stone,
        'primary': appColors.sanJuan,
        'secondary': appColors.tango,
        'accent': appColors.tango,
        'brand': appColors.toreaBay,
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        display: ['Bungee', 'Pica'],
        mono: ['Input Mono', 'Space Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        proto: [
          'Flow Circular',
          'Redacted Script',
          'Flow Block',
          'Blokk Neue',
          'Blokk',
          'Flow Rounded',
          'cursive',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      gridTemplateColumns: {
        // 22: 'repeat(22, minmax(60px, 1fr))',
        24: 'repeat(24, minmax(60px, 1fr))',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing'),
    }),
    fill: ({ theme }) => ({
      gray: theme('colors.gray'),
    }),
    backgroundImage: theme => ({
      squiggle: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
          'colors.blue.700',
        )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`,
      )}")`,
    }),
    boxShadow: {
      tag: '3px 3px 0 #004085',
      field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
      px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
      link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
    },
    cursor: {
      grab: 'grab',
      grabbing: 'grabbing',
    },
    animation: {
      wiggle: 'wiggle 1s infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': {
          transform: 'scale(1.2) rotate(7deg)',
        },
        '50%': {
          transform: 'scale(0.8) rotate(-7deg)',
        },
      },
    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
      'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
    },
  },
}
