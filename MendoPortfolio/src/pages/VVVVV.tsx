import TextBlock from "../components/TextBlock";
import { Introduction, Tecnologies, Learnings } from "../data/VVVVVData";
import ImageCarrouselle from "../components/ImageCarrouselle";
import BackButton from "../components/BackButton";

const images = ["/Images/finalVVVVV.PNG"];

export default function VVVVV() {
  return (
    <div className="container">
      <div className="container">
        <BackButton />
        <ImageCarrouselle imagesURL={images} />
      </div>

      <div className="container">
        <TextBlock tamaño={45} contenido={Introduction} />
        <TextBlock tamaño={45} contenido={Tecnologies} />
      </div>
      <div className="container">
        <TextBlock tamaño={100} contenido={Learnings} />
      </div>
    </div>
  );
}
