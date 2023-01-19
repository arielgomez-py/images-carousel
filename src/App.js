import "./App.css";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";

function App(props) {
  return (
    <div className="App">
      <h1>Images carousel</h1>
      <Button  span=">>>>>" />
      <Carousel></Carousel>
      <Button span="<<<<<" />
    </div>
  );
}

export default App;
