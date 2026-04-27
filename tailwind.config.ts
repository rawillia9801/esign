import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#cbd5e1',
        glow: '#1e293b'
      }
    }
  },
  plugins: [],
}

export default config
