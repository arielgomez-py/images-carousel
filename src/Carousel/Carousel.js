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
      <div className="backgroundCard">
        <img
          className="backgroundImage"
          src={props.cards[props.currentIndex + 1].src}
        />
        <p children="backgroundDescription">
          {props.cards[props.currentIndex + 1].description}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
