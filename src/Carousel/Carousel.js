import React from "react";
import "./Carousel.css";
import Card from "../Card/Card";

//import the images using variables that represents to the images in the files assest
import cocktail from "../assets/cocktail.jpg";
import aperitif from "../assets/aperitif.jpg";
import cups from "../assets/cups.jpg";
import mojito from "../assets/mojito.jpg";
import mojito2 from "../assets/mojito2.jpg";
import mojito3 from "../assets/mojito3.jpg";
import mojito4 from "../assets/mojito4.jpg";

const Carousel = () => {
  const cards = [
    { id: 1, src: cocktail, description: "Cocktail" },
    { id: 2, src: aperitif, description: "Aperitif" },
    { id: 3, src: cups, description: "Cups" },
    { id: 4, src: mojito, description: "Mojito" },
    { id: 5, src: mojito2, description: "Mojito2" },
    { id: 6, src: mojito3, description: "Mojito3" },
    { id: 7, src: mojito4, description: "Mojito4" },
  ];
  return (
    <div className="cardsContainer">
      {cards.map((card) => (
        <Card key={card.id} src={card.src} description={card.description} />
      ))}
    </div>
  );
};

export default Carousel;
