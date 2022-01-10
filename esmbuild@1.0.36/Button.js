import React from "react";
import { styled } from "@twind/react";
import { tw } from "twind";
import { addPropertyControls, ControlType } from "framer";
const Test2 = () => {
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
        text-white bg-primary-600
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
    className: tw`font-bold text(center 5xl primary-600)`
  }, "This is Twind!"), /* @__PURE__ */ React.createElement(Button, {
    variant: "primary"
  }, "Primary Button"));
};
Test2.defaultProps = {
  text: "Tap"
};
addPropertyControls(Test2, {
  title: {
    title: "maaan",
    type: ControlType.String,
    defaultValue: "Title"
  }
});
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
};
const squareStyle = {
  margin: 50,
  padding: 50,
  color: "white",
  fontWeight: 600,
  borderRadius: 25,
  backgroundColor: "#09F",
  width: "max-content",
  whiteSpace: "pre-wrap",
  flexShrink: 0
};
export {
  Test2
};
