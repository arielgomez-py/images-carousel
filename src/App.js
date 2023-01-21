import "./App.css";
import Button from "./Button/Button";
import Carousel from "./Carousel/Carousel";

function App(props) {
  return (
    <div className="App">
      <h1>Images carousel</h1>
      <Button onClick={() => props.handleNext()} span=">>>>>" />
      <Carousel handleNext={props.handleNext} handlePrev={props.handlePrev} />
      <Button onClick={() => props.handlePrev()} span="<<<<<" />
    </div>
  );
}

export default App;
