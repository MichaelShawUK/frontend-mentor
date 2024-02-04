import { useState } from "react";

import PreviousArrow from "../svg/PreviousArrow";
import NextArrow from "../svg/NextArrow";

import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

function Slideshow() {
  const [currentImage, setCurrentImage] = useState(1);

  const images = [img1, img2, img3, img4];
  const numImages = images.length;

  const prevImage = () => setCurrentImage((image) => Math.max(1, --image));
  const nextImage = () =>
    setCurrentImage((image) => Math.min(++image, numImages));

  return (
    <section className="slideshow">
      <div className="carousel" data-image={currentImage}>
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
      <div className="actions">
        <button
          className="previous"
          onClick={prevImage}
          disabled={currentImage === 1}
        >
          <PreviousArrow height="13" />
        </button>
        <button
          className="next"
          onClick={nextImage}
          disabled={currentImage === numImages}
        >
          <NextArrow height="13" />
        </button>
      </div>
    </section>
  );
}

export default Slideshow;
