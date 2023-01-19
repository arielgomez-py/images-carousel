import "./App.css";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <h1>Images carousel</h1>
      <Button />
      <Carousel></Carousel>
      <Button />
    </div>
  );
}

export default App;
