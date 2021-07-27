//dependencies
import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/Heading";
import List from "./components/ListComponent";
ReactDom.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
