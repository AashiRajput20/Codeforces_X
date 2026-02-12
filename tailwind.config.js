import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        cfDark: {
          primary: "#7c3aed",
          "base-100": "#0f0f0f",
          "base-200": "#1a1a1a",
          "base-content": "#ffffff",
        },
      },
      {
        cfLight: {
          primary: "#7c3aed",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-content": "#111827",
        },
      },
    ],
  },
};
