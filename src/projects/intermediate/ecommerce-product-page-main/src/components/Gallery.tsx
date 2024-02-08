import { useState } from "react";

import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import image1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import image2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import image3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import image4thumb from "../assets/images/image-product-4-thumbnail.jpg";

const images = [
  {
    image: image1,
    thumbnail: image1thumb,
  },
  {
    image: image2,
    thumbnail: image2thumb,
  },
  {
    image: image3,
    thumbnail: image3thumb,
  },
  {
    image: image4,
    thumbnail: image4thumb,
  },
];

interface Props {
  onOpen: () => void;
}

function Gallery({ onOpen }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnailImages = images.map((image, index) => (
    <li key={index} className={`${index === selectedImage ? "selected" : ""}`}>
      <button onClick={() => setSelectedImage(index)}>
        <img src={image.thumbnail} />
      </button>
    </li>
  ));

  return (
    <section className="gallery">
      <img
        src={images[selectedImage].image}
        className="display-image"
        onClick={onOpen}
      />
      <ul className="image-picker">{thumbnailImages}</ul>
    </section>
  );
}

export default Gallery;
