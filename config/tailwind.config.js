const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/components/**/*.{erb,haml,html,slim,js,rb}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
  purge: {
    safelist: [
      'text-red-600',
      'hover:text-red-700',
      'text-gray-600',
      'hover:text-gray-700',
      'text-stone-600',
      'hover:text-stone-700',
      'text-green-600',
      'hover:text-green-700',
      'text-blue-600',
      'hover:text-blue-700',
      'bg-gray-500',
      'hover:bg-gray-600',
      'bg-stone-500',
      'hover:bg-stone-600',
      'bg-blue-500',
      'hover:bg-blue-600',
      'bg-red-500',
      'hover:bg-red-600',
      'bg-green-500',
      'hover:bg-green-600'
    ]
  },
}
