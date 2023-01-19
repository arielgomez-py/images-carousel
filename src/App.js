import "./App.css";
import Button from "./Button/Button";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";

//import the images using variables that represents to the images in the files assest
import cocktail from "../src/assets/cocktail.jpg";
import aperitif from "../src/assets/aperitif.jpg";
import cups from "../src/assets/cups.jpg";
import mojito from "../src/assets/mojito.jpg";
import mojito2 from "../src/assets/mojito2.jpg";
import mojito3 from "../src/assets/mojito3.jpg";
import mojito4 from "../src/assets/mojito4.jpg";

function App(props) {
  const cards = [
    { id: 1, imageName: cocktail, description: "Cocktail" },
    { id: 2, imageName: aperitif, description: "Aperitif" },
    { id: 3, imageName: cups, description: "Cups" },
    { id: 4, imageName: mojito, description: "Mojito" },
    { id: 5, imageName: mojito2, description: "Mojito2" },
    { id: 6, imageName: mojito3, description: "Mojito3" },
    { id: 7, imageName: mojito4, description: "Mojito4" },
  ];
  return (
    <div className="App">
      <h1>Images carousel</h1>
      <Button />
      <Carousel>
        <Card/>
      </Carousel>
      <Button />
    </div>
  );
}
{/*{props.cards.map((card) => (
          <Card
            key={card.id}
            imageName={card.imageName}
            description={card.description}
          />
        ))} */}
export default App;
