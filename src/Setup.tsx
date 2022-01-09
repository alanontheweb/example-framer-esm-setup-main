import { setup } from "twind";

// import Hello from "./Test.tsx"

// Learn more: https://www.framer.com/docs/guides/code-components/

export const Setup = () => {
  setup({
    theme: {
      colors: {
        // Build your palette here
        gray: "red",
        red: "blue",
        blue: "green",
        yellow: "yellow",
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        serif: ["Times", "serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
      },
    },
  });
};
