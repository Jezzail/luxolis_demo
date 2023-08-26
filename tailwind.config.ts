import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-pattern": "url(/background.png)",
      },
      boxShadow: {
        button: "0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
