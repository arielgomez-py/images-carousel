import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [transition, seTtransition] = useState(null);

  useEffect(() => {
    seTtransition(props.movingCard);
    setTimeout(() => {
      props.setMoving("");
    }, 500);
  }, [props.movingCard]);

  return (
    <article className={`card ${transition}`}>
      <img src={props.src} />
      <p>{props.description}</p>
    </article>
  );
};

export default Card;
