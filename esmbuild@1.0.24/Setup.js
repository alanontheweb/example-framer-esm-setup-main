import { setup } from "twind";
const Setup = () => {
  setup({
    theme: {
      colors: {
        gray: "red",
        red: "green",
        blue: "green",
        yellow: "yellow"
      },
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        serif: ["Times", "serif"]
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem"
        }
      }
    }
  });
};
export {
  Setup
};
