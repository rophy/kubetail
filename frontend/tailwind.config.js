/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@kubetail/ui/**/*.js',
	],
  plugins: [
    require('@kubetail/ui/plugin'),
    require('fancy-ansi/plugin')
  ],
}
