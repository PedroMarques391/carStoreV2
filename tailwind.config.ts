import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "carStore": "url('/carStore.png')",
        "carStoreMobile": "url('/carStoreMobile.png')",
        "carStoreGarage": "url('/carStoreGarage.png')",
        "carStoreGarageMobile": "url('/carStoreGarageMobile.png')",
        "carStoreAbout": "url('/carStoreAbout.png')",
        "carStoreAboutMobile": "url('/carStoreAboutMobile.png')",
      },
      keyframes: {
        line: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shine: {
          "0%": {
            transform: "translateX(-150%)",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateX(150%)",
            opacity: "0"
          },
        }
      },
      animation: {
        lines: "line 2s ease-in-out forwards",
        load: "shine 2s infinite",
      }
    },
  },
  plugins: [],
};
export default config;
