import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:            '#1B2A3B',
        'dark-2':        '#243547',
        accent:          '#C9941A',
        'accent-h':      '#B4821A',
        'accent-dark':   '#E0A820', // text on dark backgrounds
        'accent-light':  '#9A6E10', // text on light backgrounds
        bg:              '#F5F2EC',
        muted:           '#6B7A8D',
        border:          '#E2DDD6',
      },
      fontFamily: {
        head: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'hero-pattern': `
          radial-gradient(circle at 70% 50%, rgba(201,148,26,0.08) 0%, transparent 60%),
          repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)
        `,
      },
    },
  },
  plugins: [],
}

export default config
