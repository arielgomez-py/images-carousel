import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

const Carousel = (props) => {
  return (
    <div key={props.index} className="cardsContainer">
      <Card
        src={props.image}
        description={props.description}
        movingCard={props.movingCard}
      />
    </div>
  );
};

export default Carousel;
