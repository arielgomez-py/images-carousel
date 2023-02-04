import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

const Carousel = (props) => {
  const handleBackground = () => {
    if (
      props.currentIndex < props.cards.length - 1 &&
      props.movingCard == "moving-next"
    ) {
      return props.cards[props.currentIndex + 1].src;
    } else if (
      props.currentIndex == props.cards.length - 1 &&
      props.movingCard == "moving-next"
    ) {
      return props.cards[0].src;
    }
  };

  return (
    <div className="cardsContainer">
      <Card
        src={props.image}
        description={props.description}
        movingCard={props.movingCard}
        setMoving={props.setMoving}
      />
      {/*background card created for make the visual effect in the carousel */}
      <div className="backgroundCard">
        <img className="backgroundImage" src={handleBackground()} />
        <p className="backgroundDescription">
          {/*props.cards[props.currentIndex + 1].description*/}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
