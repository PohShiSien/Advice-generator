/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '575px',
      },
      margin: {
        negative: '-1rem',
      },
      fontSize: {
        quote: '28px',
      },
      fontWeight: {
        quoteWeight: '800',
      },
      colors: {
        lightCyan: 'var(--light-cyan)',
        neonGreen: 'var(--neon-green)',
        grayishBlue: 'var(--grayish-blue)',
        darkGrayishBlue: 'var(--dark-grayish-blue)',
        darkBlue: 'var(--dark-blue)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
