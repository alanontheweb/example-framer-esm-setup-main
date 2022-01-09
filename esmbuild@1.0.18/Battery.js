// src/Battery.tsx
import React from "react.js";
import { useBattery } from "react-use.js";
var Battery = () => {
  const batteryState = useBattery();
  if (!batteryState.isSupported) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ": ", /* @__PURE__ */ React.createElement("span", null, "not supported"));
  }
  if (!batteryState.fetched) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ": ", /* @__PURE__ */ React.createElement("span", null, "supported"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Battery state"), ": ", /* @__PURE__ */ React.createElement("span", null, "fetching"));
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Battery sensor"), ":\xA0\xA0 ", /* @__PURE__ */ React.createElement("span", null, "supported"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Battery state"), ": ", /* @__PURE__ */ React.createElement("span", null, "fetched"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charge level"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, (batteryState.level * 100).toFixed(0), "%"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charging"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, batteryState.charging ? "yes" : "no"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Charging time"), ":\xA0\xA0", /* @__PURE__ */ React.createElement("span", null, batteryState.chargingTime ? batteryState.chargingTime : "finished"), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Discharging time"), ":\xA0\xA0", " ", /* @__PURE__ */ React.createElement("span", null, batteryState.dischargingTime));
};
export {
  Battery
};
