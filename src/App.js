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
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setMoving("moving-next");
    }
  };

  //Move previous function
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
      setMoving("moving-prev");
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
      />
      <Button onClick={handlePrev} span="<<<<<" />
    </div>
  );
}

export default App;
