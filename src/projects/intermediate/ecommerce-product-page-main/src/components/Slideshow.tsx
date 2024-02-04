import { useState } from "react";

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
          <svg
            width="35%"
            height="35%"
            viewBox="0 0 12 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="4"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="next"
          onClick={nextImage}
          disabled={currentImage === numImages}
        >
          <svg
            width="35%"
            height="35%"
            viewBox="0 0 12 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="4"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slideshow;
