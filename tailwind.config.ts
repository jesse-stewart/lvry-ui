import type { Config } from "tailwindcss";

const colors = {
  red: {
    DEFAULT: "#ef3a32",
    100: "#fee3e2",
    200: "#feccca",
    300: "#fda8a4",
    400: "#f97670",
    500: "#ef3a32", // primary
    600: "#dd2d25",
    700: "#ba221b",
    800: "#9a1f1a",
    900: "#80201c",
  },
  blue: {
    DEFAULT: "#1ca7e2",
    100: "#e2f2fc",
    200: "#bee6f9",
    300: "#85d1f4",
    400: "#44bbec",
    500: "#1ca7e2", // secondary
    600: "#0e82bb",
    700: "#0d6897",
    800: "#0f587d",
    900: "#124968",
  },
  white: {
    DEFAULT: "#FFFFFF",
    100: "#FFFFFF",
    200: "#FAFAFA",
    300: "#F5F5F5",
    400: "#F0F0F0",
    500: "#EDEDED",
    600: "#E8E8E8",
    700: "#E3E3E3",
    800: "#DEDEDE",
    900: "#D9D9D9", // border
  },
  gray: {
    DEFAULT: "#23262B",
    100: "#E6E7EA",
    200: "#CACDD4",
    300: "#B0B6BF",
    400: "#949BA8",
    500: "#7B8493",
    600: "#656D7C",
    700: "#5E6370", // muted
    800: "#393E46",
    900: "#23262B", // tertiary
  },
  black: {
    DEFAULT: "#1A1A1A",
    100: "#474747",
    200: "#404040",
    300: "#393939",
    400: "#333333",
    500: "#2C2C2C",
    600: "#292929",
    700: "#1F1F1F", // bg-nav
    800: "#1C1C1C", // bg-main
    900: "#1A1A1A", // bg-modal
  },
};
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red[500],
        secondary: colors.blue[500],
        border: colors.white[900],
        muted: colors.gray[700],
        tertiary: colors.gray[900],
        "bg-nav": colors.black[700],
        "bg-main": colors.black[800],
        "bg-modal": colors.black[900],
        ...colors,
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      minWidth: {
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1536px",
      },
      spacing: {
        "0": "0.0px",
        "0.5": "2.5px",
        "1": "5.0px",
        "1.5": "7.5px",
        "2": "10.0px",
        "2.5": "12.5px",
        "3": "15.0px",
        "3.5": "17.5px",
        "4": "20.0px",
        "5": "25.0px",
        "6": "30.0px",
        "7": "35.0px",
        "8": "40.0px",
        "9": "45.0px",
        "10": "50.0px",
        "11": "55.0px",
        "12": "60.0px",
        "14": "70.0px",
        "16": "80.0px",
        "17": "85.0px",
        "18": "90.0px",
        "19": "95.0px",
        "20": "100.0px",
        "22": "110.0px",
        "23": "115.0px",
        "24": "120.0px",
        "25": "125.0px",
        "28": "140.0px",
        "32": "160.0px",
        "36": "180.0px",
        "40": "200.0px",
        "44": "220.0px",
        "48": "240.0px",
        "52": "260.0px",
        "56": "280.0px",
        "60": "300.0px",
        "64": "320.0px",
        "72": "360.0px",
        "80": "400.0px",
        "96": "480.0px",
      },
      fontFamily: {
        sans: ["paralucent-text", "sans-serif"],
        heading: ["paralucent", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^grid-cols-/,
    },
  ],
};
export default config;
