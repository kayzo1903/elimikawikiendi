import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class' ,
  theme: {
    extend: {
     colors : {
      "skin" : "#ab0809" ,
      "skin2" : "#dee4e2" ,
      "primary" : "#fbfbfb" ,
      "secondary" : "#f1f1f1",
     }
    },
  },
  plugins: [],
};
export default config;
