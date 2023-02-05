import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.span}</button>
    </div>
  );
};

export default Button;
