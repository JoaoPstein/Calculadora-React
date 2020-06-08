import React from "react";
import "./button.css";

export default (props) => (
  <button
    className={`
    button
    ${props.operation ? "operation" : ""}
    ${props.double ? "double" : ""}
    ${props.triple ? "triple" : ""}
`}
  >
    {props.label}
  </button>
);
