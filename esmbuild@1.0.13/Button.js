// src/Button.tsx
import React from "react";
import { styled } from "https://jspm.dev/@twind/react";
import { tw, setup } from "https://jspm.dev/twind";
import { addPropertyControls, ControlType } from "framer";
var Test2 = () => {
  setup({
    theme: {
      colors: {
        gray: "red",
        red: "blue",
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
  const Button = styled("button", {
    base: `
    appearance-none border-none bg-transparent
    rounded-full px-2.5
  `,
    variants: {
      size: {
        sm: `text-sm h-6`,
        md: `text-base h-9`
      },
      variant: {
        gray: `
        bg-gray-500
        hover:bg-gray-600
      `,
        primary: `
        text-white bg-red
        hover:bg-purple-600
      `
      },
      outlined: {
        true: `bg-transparent ring-1`
      }
    },
    defaults: {
      variant: "gray",
      size: "sm"
    },
    matches: [
      {
        variant: "gray",
        outlined: true,
        use: `ring-gray-500`
      },
      {
        variant: "primary",
        outlined: true,
        use: `text-purple-500 ring-gray-500 hover:text-white`
      }
    ]
  });
  console.log("dfd");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: tw`font-bold text(center 5xl white sm:gray-800 md:red)`
  }, "This is Twind!"), /* @__PURE__ */ React.createElement(Button, {
    variant: "primary"
  }, "Primary Button"));
};
Test2.defaultProps = {
  text: "Tap"
};
addPropertyControls(Test2, {
  title: {
    title: "lol",
    type: ControlType.String,
    defaultValue: "Title"
  }
});
export {
  Test2
};
