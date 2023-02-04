import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

const Carousel = (props) => {
  return (
    <div className="cardsContainer">
      <Card
        src={props.image}
        description={props.description}
        movingCard={props.movingCard}
        setMoving={props.setMoving}
      />
    </div>
  );
};

export default Carousel;
