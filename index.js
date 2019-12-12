import React from "react";
import { render } from "react-dom";
import Router from "./src/router";

const root = document.getElementById("root");

const Redbox = require("redbox-react").default;

try {
  render(<Router />, root);
} catch (e) {
  render(<Redbox error={e} />, root);
}
