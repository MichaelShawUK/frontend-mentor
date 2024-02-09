import { useAppSelector, useAppDispatch } from "../hooks/useStore";
import {
  selectCurrentImage,
  nextImage,
  previousImage,
} from "../app/gallerySlice";

import PreviousArrow from "../svg/PreviousArrow";
import NextArrow from "../svg/NextArrow";

import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

function Slideshow() {
  const dispatch = useAppDispatch();

  const currentImage = useAppSelector(selectCurrentImage);

  const images = [img1, img2, img3, img4];
  const numImages = images.length;

  const goToPrevImage = () => dispatch(previousImage());
  const goToNextImage = () => dispatch(nextImage());

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
          onClick={goToPrevImage}
          disabled={currentImage === 0}
        >
          <PreviousArrow height="13" />
        </button>
        <button
          className="next"
          onClick={goToNextImage}
          disabled={currentImage === numImages - 1}
        >
          <NextArrow height="13" />
        </button>
      </div>
    </section>
  );
}

export default Slideshow;
