import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <article className={`card ${props.movingCard}`}>
      <img src={props.src} />
      <p>{props.description}</p>
    </article>
  );
};

export default Card;
