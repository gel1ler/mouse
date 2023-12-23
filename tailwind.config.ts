import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 0 25px -5px rgb(0 0 0 / .5), 0 0 10px -6px rgb(0 0 0 / 0.1)'
      }
    }
  },
  plugins: [],
}
export default config
