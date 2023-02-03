import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.movingCard}`}>
      <img src={props.src} />
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
