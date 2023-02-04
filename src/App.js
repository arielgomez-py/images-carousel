import "./App.css";
import Button from "./Button/Button";
import Carousel from "./Carousel/Carousel";
import { useState } from "react";
import { cards } from "./data/data";

function App(props) {
  //State to show the image
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to add moving effect in carousel
  const [moving, setMoving] = useState("");

  //Move next function
  const handleNext = () => {
    if (moving != "") return; //to desable the button when the cards is moving
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setMoving("moving-next");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 500);
    }
  };

  //Move previous function
  const handlePrev = () => {
    if (moving != "") return; //to desable the button when the cards is moving
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setMoving("moving-prev");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 500);
    }
  };
  return (
    <div className="App">
      <h1>Images carousel</h1>
      <Button onClick={handleNext} span=">>>>>" />
      <Carousel
        image={cards[currentIndex].src}
        description={cards[currentIndex].description}
        movingCard={moving}
        setMoving={setMoving}
        cards={cards}
        currentIndex={currentIndex}
      />
      <Button onClick={handlePrev} span="<<<<<" />
    </div>
  );
}

export default App;
