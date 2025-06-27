import "/src/css/ImageCarrouselle.css";

interface ImagesURL {
  imagesURL: string[];
}

export default function ImageCarrouselle({ imagesURL }: ImagesURL) {
  return (
    <div className="carousel">
      {imagesURL.map((imageURL, index) => (
        <div key={index}>
          <img src={imageURL} />
        </div>
      ))}
    </div>
  );
}
