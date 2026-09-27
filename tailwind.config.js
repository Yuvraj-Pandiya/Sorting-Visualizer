/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#1a1a1a",
        "tertiary": "#0055ff",
        "surface-variant": "#e8e3da",
        "primary-fixed": "#ffcc00",
        "secondary-fixed": "#ffdad6",
        "surface-dim": "#d6d1c9",
        "inverse-primary": "#f5f0e8",
        "surface-bright": "#faf7f2",
        "on-secondary-fixed-variant": "#1a1a1a",
        "on-surface": "#1a1a1a",
        "on-error-container": "#93000a",
        "inverse-surface": "#1a1a1a",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#d0cbc3",
        "on-secondary-container": "#1a1a1a",
        "on-tertiary-container": "#1a1a1a",
        "inverse-on-surface": "#f5f0e8",
        "background": "#f5f0e8",
        "on-primary": "#ffffff",
        "outline": "#1a1a1a",
        "on-tertiary-fixed-variant": "#1a1a1a",
        "primary-fixed-dim": "#e6b800",
        "tertiary-fixed-dim": "#a8c6ff",
        "primary": "#1a1a1a",
        "on-tertiary-fixed": "#1a1a1a",
        "on-error": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#d6e3ff",
        "on-background": "#1a1a1a",
        "surface-container-highest": "#e2ddd4",
        "surface-tint": "#1a1a1a",
        "tertiary-container": "#d6e3ff",
        "secondary-container": "#ffdad6",
        "primary-container": "#ffcc00",
        "surface-container-high": "#e8e3da",
        "on-surface-variant": "#4a4a4a",
        "error": "#cc0000",
        "error-container": "#ffdad6",
        "surface": "#f5f0e8",
        "on-secondary": "#1a1a1a",
        "secondary": "#e63b2e",
        "surface-container-low": "#f2ede5",
        "on-primary-container": "#1a1a1a",
        "on-primary-fixed-variant": "#1a1a1a",
        "secondary-fixed-dim": "#ffb3ab",
        "surface-container": "#eee9e0",
        "on-primary-fixed": "#1a1a1a"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"],
        "code-notation": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem"
      },
      boxShadow: {
        "brutal": "3px 3px 0px #1a1a1a",
        "brutal-lg": "4px 4px 0px #1a1a1a",
        "brutal-sm": "2px 2px 0px #1a1a1a",
        "brutal-press": "1px 1px 0px #1a1a1a"
      }
    },
  },
  plugins: [],
}
